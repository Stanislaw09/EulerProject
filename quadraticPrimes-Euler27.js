let primes=[]

function sieve(n){
    primes[0]=1

    for(let i=2;i<=Math.sqrt(n);i++)
        for(let j=2;j*i<=n;j++)
            primes[i*j]=0;
}

function quadraticPrimes(range) {
    let value, result, maximum=0, amount

    for(let i=0;i<Math.pow(range, 2);i++)
        primes.push(1)

    sieve(Math.pow(range, 2))

    for(let b=5;b<=range;b++){
        if(primes[b]==1)
            for(let a=-range;a<=range;a++){
                amount=0
                value=0

                for(let n=0;primes[value]==1;n++){
                    value=(Math.pow(n, 2)+(a*n)+b)

                    if(primes[value]==1){
                        amount++

                        if(amount>maximum){
                            maximum=amount
                            result=a*b
                        }
                    }
                }
            }
        }
        return result
}

console.log(quadraticPrimes(1000));
