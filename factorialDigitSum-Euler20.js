function multipilaction(value, k){
    let res='';
    let decimal=0;
    let sign='';

    let arr=value.split('').reverse();
    arr.push('0');
    value=arr.reverse().join('');

    for(let i=value.length-1;i>=0;i--){

        sign=((parseInt(value[i])*k)+decimal).toString();
        decimal=Math.floor((parseInt(value[i])*k+decimal)/10);
        res+=sign[sign.length-1];
    }

    if(decimal!=0)
        res+=decimal;

    return res.split('').reverse().join('');
}

function sumFactorialDigits(n) {
  let result='1';
  let sum=0;

  for(let i=2;i<=n;i++)
      result=multipilaction(result, i);

  for(let x of result)
      sum+=parseInt(x);

  return sum;
}

console.log(sumFactorialDigits(100));
