function divisibleTriangleNumber(n) {
  var sum=0;
  let count=0;

  for(let i=1;;i++){
      sum+=i;
      if(sum%2==0)
      {
          count=0;

          for(let i=0;i<=Math.sqrt(sum);i++)
            if(sum%i==0) count+=2;

          if(count>n)
            return sum;
    }
  }
}

console.log(divisibleTriangleNumber(167));
