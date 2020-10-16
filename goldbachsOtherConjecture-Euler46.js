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

function goldbachsOtherConjecture(){
    let primesInitial=sieve(10000)
    let primes=[]
    let squares=[]
    let numbers=[]

    for(let i=0;i<10000;i++)
        numbers.push(0);

    for(let i=1;i<100;i++)
        squares.push(Math.pow(i,2))

    for(let i=2;i<10000;i++)
        if(primesInitial[i]===1)
            primes.push(i)

    for(let i=0;i<primes.length;i++)
        for(let j=0;j<squares.length;j++)
            numbers[2*squares[j]+primes[i]]=1

    for(let i=3;i<10000;i++)
        if(i%2==1 && primesInitial[i]==0)
            if(numbers[i]==0)
                return i;
}

console.log(goldbachsOtherConjecture());
