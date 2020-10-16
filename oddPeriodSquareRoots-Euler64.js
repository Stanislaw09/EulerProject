const frac=(n, up, down, iterator, results)=>{
    let denum=(n-Math.pow(up, 2))/down
    let num=(Math.floor((Math.sqrt(n)+up)/denum)*denum)-up

    for(let i=0;i<results.length;i++)
        if(results[i][0]==num && results[i][1]==denum)
            return iterator

    results.push([num, denum])

    return frac(n, num, denum, iterator+1, results)
}

function oddPeriodSqrts(){
    let result=0

    for(let i=2;i<10000;i++)
        if(Math.sqrt(i)!=parseInt(Math.sqrt(i)))
            if(frac(i, Math.floor(Math.sqrt(i)), 1, 0, [])%2==1)
                result++

    return result
}

console.log(oddPeriodSqrts())
