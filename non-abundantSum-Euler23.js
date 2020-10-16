function perfectNumber(n){
    let sum=1;

    for(let i=2;i<Math.sqrt(n);i++)
      if(n%i==0){
        sum+=i;
        sum+=(n/i)
      }

      if(n%Math.sqrt(n)==0)
        sum+=Math.sqrt(n)

      if(sum===n)
          return 0;
      else if(sum<n)
              return -1;
      else return 1;
}

function sumOfNonAbundantNumbers(n) {
    let sum=0;
    let arr=[];
    let aboundats=[];

    for(let i=0;i<=n;i++){
        arr.push(0);
        aboundats.push(0);
    }

    for(let i=12;i<=n;i++)
        if(arr[i]==0    &&    perfectNumber(i)==1)
            for(let j=1;j*i<=n;j++)
                arr[i*j]=1;

    for(let i=1;i<=n;i++)
        for(let j=1;(j+i)<=n;j++)
            if(arr[i]==1  &&  arr[j]==1)
                aboundats[i+j]=1;

    for(let i=0;i<=n;i++)
        if(aboundats[i]==0)
            sum+=i;

    return sum;
}

console.log(sumOfNonAbundantNumbers(28123));
