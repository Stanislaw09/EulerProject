const isPrime=n=>{
    for(let i=2;i<=Math.sqrt(n);i++)
        if(n%i==0)
            return false
    return true
}

function spiralPrimes(){
    let primes=0
    let corners=1

    for(let i=3;1<27000;i+=2){
        let power=Math.pow(i,2)
        corners+=4

        if(isPrime(power-i+1))
            primes++

        if(isPrime(power-(2*i)+2))
            primes++

        if(isPrime(power-(i*3)+3))
            primes++

        if(primes/corners<0.1)
            return i
    }
}

console.log(spiralPrimes())
