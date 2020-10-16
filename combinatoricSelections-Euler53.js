const newton=(n,r)=>{
    let result=1

    for(let i=n;i>n-r;i--)
        result*=i
    for(let i=1;i<=r;i++)
        result/=i

    return result
}

function combinatoricSelections(limit){
    let result=0

    for(let i=2;i<=100;i++)
        for(let j=2;j<=100;j++)
            if(j>i)
                if(newton(j,i)>limit){
                    result+=100-j+1
                    break
                }

    return result
}

console.log(combinatoricSelections(1000000))
