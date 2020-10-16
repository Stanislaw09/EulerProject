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

function consecutivePrimeSum(limit){
    let primes=sieve(limit)
    let sum=[]
    sum.push(2)
    let range=0
    let result=0
    let diff=0

    for(let i=3;i<limit;i++)
        if(primes[i]==1){
            sum.push(sum[sum.length-1]+i)
            if(sum[sum.length-1]>limit && range==0)
                range=sum.length-1
        }

    for(let i=0;i<range;i++)
        for(let j=0;j<range;j++)
            if(sum[j]-sum[i]>0 && primes[sum[j]-sum[i]]==1)
                if(j-i>diff){
                    diff=j-i
                    result=sum[j]-sum[i]
                }

    return result
}

console.log(consecutivePrimeSum(1000000));
