function sieve(n){
    let arr=[]

    for(let i=0;i<n;i++)
        arr.push(1)

    arr[0]=0
    arr[1]=0

    for(let i=2;i<=Math.sqrt(n);i++)
        for(let j=2;i*j<=n;j++)
            arr[i*j]=0

    return arr
}

const isPrime=n=>{
    for(let i=2;i<=Math.sqrt(n);i++)
        if(n%i==0)
            return false
    return true
}

function primePairSets(){
    let primesArr=sieve(10000)
    let primes=[]

    for(let i=0;i<primesArr.length;i++)
        if(primesArr[i]==1)
            primes.push(i)

    for(let k=0;k<10;k++){
    let arr=[]
    let pairs=[]

        for(let j=0;primes[j]<10000;j++)
            if(isPrime(parseInt(primes[k].toString()+primes[j].toString())) && isPrime(parseInt(primes[j].toString()+primes[k].toString())))
                arr.push(primes[j])

        for(let i=0;i<arr.length;i++)
            for(let j=i;j<arr.length;j++)
                if(isPrime(parseInt(arr[i].toString()+arr[j].toString())) && isPrime(parseInt(arr[j].toString()+arr[i].toString())))
                    pairs.push([arr[i], arr[j]])

        for(let i=0;i<pairs.length;i++)
            for(let j=i;j<pairs.length;j++)
                if(isPrime(parseInt(pairs[i][0].toString()+pairs[j][0].toString())) && isPrime(parseInt(pairs[j][0].toString()+pairs[i][0].toString())) &&

                isPrime(parseInt(pairs[i][0].toString()+pairs[j][1].toString())) && isPrime(parseInt(pairs[j][1].toString()+pairs[i][0].toString())) &&

                isPrime(parseInt(pairs[i][1].toString()+pairs[j][0].toString())) && isPrime(parseInt(pairs[j][0].toString()+pairs[i][1].toString())) &&

                isPrime(parseInt(pairs[i][1].toString()+pairs[j][1].toString())) && isPrime(parseInt(pairs[j][1].toString()+pairs[i][1].toString())))
                return pairs[i][0]+pairs[i][1]+pairs[j][0]+pairs[j][1]+primes[k]
    }
}

console.log(primePairSets())
