function champernownesConstant(n){
  let digits=[0];
  let result=1;

  for(let i=1;i<=Math.log10(n);i++)
    digits.push(digits[i-1]+(9*i*Math.pow(10, i-1)));

  for(let i=2;i<=Math.log10(n);i++){
      let amount=Math.pow(10,i)-digits[i-1];
      let dif=amount-(Math.floor(amount/i)*i);
      let arr=(Math.ceil(amount/i)+Math.pow(10, i-1)).toString().split('');
      result*=parseInt(arr[dif-1]);
  }
  return result;
}

console.log(champernownesConstant(1000000));
