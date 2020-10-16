const greatestCommonDivisor=(a,b)=>{
    while(b!=0){
        let c=a%b
        a=b
        b=c
    }

    return a
}

function totientMaximum(){
    let primes=[2, 3, 5, 7, 11, 13, 17]
    let result=0
    let totient=0
    let n=2

    for(let i=1;i<primes.length;i++){
        n*=primes[i]
        let relativPrimes=0

        for(let j=1;j<n;j++)
            if(greatestCommonDivisor(n, j)==1)
                relativPrimes++

        if(n/relativPrimes>totient){
            totient=n/relativPrimes
            result=n
        }
    }

    return result
}

console.log(totientMaximum())
