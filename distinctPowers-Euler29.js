function distinctPowers(n) {
    let result=0;
    let degree=[];
    let arr=[];
    let done=[];
    let m=Math.floor(Math.log2(n))
    degree.push(0);

    for(let i=0;i<=(m*n)+1;i++)
        arr.push(0)

    for(let i=0;i<=n;i++)
        done.push(0);

    for(let i=1;i<=m;i++){
        for(let j=2;j<=n;j++)
            arr[i*j]=1
            
        degree.push(arr.reduce((total, num)=>total+num))
    }

        for(let i=degree.length-1;i>0;i--)
            degree[i]-=degree[i-1];


    for(let i=2;i<=n;i++)
    {
        if(done[i]==0)
            result+=n-1;

        for(let j=2;j<=n;j++)
            if(Math.pow(i, j)<=n    &&    done[i]==0){
                result+=degree[j]
                done[Math.pow(i, j)]=1
            }
    }

        return result
}

console.log(distinctPowers(30));
