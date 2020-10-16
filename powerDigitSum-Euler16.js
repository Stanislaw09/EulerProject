function greater(num){
  let result="";
  let add=0;

  for(let i=num.length-1;i>=0;i--){

    if(i==0){
        let finish=(parseInt(num[i]*2)+add).toString().split("").reverse().join("");
        result+=finish;
        return result.split("").reverse().join("");
    }

    if(parseInt(num[i])*2>8){
      result+=(parseInt(num[i]*2-10)+add);
      add=1;
    }
    else{
      result+=(parseInt(num[i]*2)+add);
      add=0;
    }
  }
}

function powerDigitSum(exp) {
  let results=[2, 4, 8, 16, 32, 64, 128, 256, 512, "1024"];
  let sum=0;

  for(let i=9;i<exp;i++)
    results.push(greater(results[i]));

  for(let i=0;i<results[exp-1].length;i++)
    sum+=parseInt(results[exp-1][i]);

return sum;
}

console.log(powerDigitSum(1000));
