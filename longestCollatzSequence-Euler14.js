function longestCollatzSequence(limit){
    let tab=[];
    let maks=0, result;

    for(let i=1;i<limit;i+=2){
        let num=i;
        let j=1;

        for(;num!=1;j++){
            if(num%2==0)
                num/=2;
            else
                num=3*num+1;
        }
        if(j>maks){
            maks=j;
            result=i;
        }
    }
    return result;
}

console.log(longestCollatzSequence(100000));
