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

function primePermutations(){
    let primes=sieve(10000)

    for(let i=1000;i<3340;i++)
        if(primes[i]==1 && primes[i+3330]==1 && primes[i+6660]==1)
            if(i.toString().split('').sort().join('')==(i+3330).toString().split('').sort().join('') &&
            (i+3330).toString().split('').sort().join('')==(i+6660).toString().split('').sort().join('') && i!=1487)
                return parseInt(i.toString()+(i+3330).toString()+(i+6660).toString())
}

console.log(primePermutations());
