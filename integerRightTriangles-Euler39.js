function intRightTriangles(n) {
    let powers=[];
    let solutions=[];
    let result=0;
    let total=0;

    for(let i=0;i<=n;i++)
        solutions.push(0)

    for(let i=0;i<n;i++)
        powers.push(Math.pow(i, 2));

    for(let a=1;a<n;a++)
    for(let b=1;b<n;b++)
    for(let c=1;c<n;c++){
        if(powers[a]+powers[b]==powers[c] && a+b>c && b+c>a && a+c>b && a+b+c<=n)
                solutions[a+b+c]++;
    }

    for(let i=0;i<=n;i++)
        if(solutions[i]>total){
            total=solutions[i];
            result=i;
        }

    return result;
}

console.log(intRightTriangles(1000));
