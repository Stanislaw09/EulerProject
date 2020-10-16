let primes=sieve(1000000)

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

const threeZero=(n, divider)=>{
    let num=n
    let arr=[]

    for(let i=0;num!==0;i++){
        if(num%10==divider)
            arr.push(i)

        num=parseInt(num/10)
    }

    if(arr.length===3)
        if(replace(n, arr, 1, divider))
            return true
        else
            return false
}

const replace=(n, arr, change, degree)=>{
    let num=n

    num+=Math.pow(10, arr[0])
    num+=Math.pow(10, arr[1])
    num+=Math.pow(10, arr[2])

    if(primes[num]==1)
        change++

    if(change+2<degree)
        return false
    if(degree==8 && change<8)
        return false
    else if(change==8)
        return true
    else
        return replace(num, arr, change, degree+1)
}

function primeDigitReplacements(){
    for(let i=60000;i<1000000;i++)
        if(primes[i]==1){
            if(threeZero(i, 0))
                return i
            if(threeZero(i, 1))
                return i
            if(threeZero(i, 2))
                return i
        }
}

console.log(primeDigitReplacements())
