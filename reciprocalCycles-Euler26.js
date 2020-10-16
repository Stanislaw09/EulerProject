function divide(n){
    let arr=[];
    let num=1;
    let result=0;

    for(let i=0;i<=n;i++)
        arr.push(0)

    while(true){
        if(arr[num%n]==1)
            return result;

        arr[num%n]=1;
        num=(num%n)*10;
        result++;
    }
}

function reciprocalCycles(n) {
  let result=0
  let score=0

  for(let i=2;i<n;i++){
      let temp=divide(i);

      if(temp>score)
        result=i;

      score=Math.max(score,temp)
  }
  return result;
}

console.log(reciprocalCycles(1000));
