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

function totientPermutation(){
    const rawPrimes=sieve(10000000)
    let primes=[]
    let numbers=[]
    let result=10

    for(let i=0;i<10000;i++)
        if(rawPrimes[i]==1)
            primes.push(i)

    for(let i=10;i<10000000;i++)
        if(i%2!=0 && i%3!=0 && i%5!=0 && rawPrimes[i]==0)
            numbers.push(i)

    numbers.forEach(x=>{
        let relativPrimes=1

        for(let k=3;primes[k]<x;k++)
            if(x%primes[k]==0)
                relativPrimes+=(x/primes[k])

        // if(x>9000000)
        // console.log(x, (x-relativPrimes));

        if(x.toString()==(x-relativPrimes).toString().split('').reverse().join(''))
        console.log(x, (x-relativPrimes));
    })

}

totientPermutation();
