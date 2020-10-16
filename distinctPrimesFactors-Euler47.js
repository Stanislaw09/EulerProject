let primesInitial=[]
let primes=[]

function sieve(n){
    let arr=[]

    for(let i=0;i<n;i++)
        arr.push(1)

    arr[0]=0
    arr[1]=0

    for(let i=2;i<=Math.sqrt(n);i++)
        for(let j=2;i*j<=n;j++)
            arr[i*j]=0

    return arr;
}

function primesCount(num, x){
    let counter=0

    for(let i=0;primes[i]<=(num/x);i++){
        if(num%primes[i]==0)
            counter++
        if(counter==x)
            return x
        }

    return counter;
}

function distinctPrimeFactors(targetNumPrimes, targetConsecutive){
    let arr=[]
    primesInitial=sieve(150000)

    for(let i=2;i<150000;i++)
        if(primesInitial[i]===1)
            primes.push(i)

    for(let i=0;i<150000;i++)
        arr.push(primesCount(i,targetNumPrimes))

    for(let i=0;i<150000;i++)
        if(arr[i]>=targetNumPrimes){
            let num=i

            for(let k=0;k<targetConsecutive;k++)
                if(arr[i+k]<targetNumPrimes)
                    num=0

            if(num!==0)
                return i
        }
}

console.log(distinctPrimeFactors(4,4));
