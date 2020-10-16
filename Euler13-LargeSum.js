function largeSum(arr) {
  let result='';
  let sum=0, rest=0;

  for(let j=49;j>=0;j--){
    rest=0;

    for(let i=0;i<arr.length;i++){
      sum+=parseInt(arr[i][j]);
    }
    rest=parseInt(sum/10);
    sum%=10;
    result+=sum;
    sum=rest;
  }
  if(sum!=0)
    result+=rest;
  result=result.split("").reverse().join("");
  console.log(result.substr());
  return parseInt(result.substr(0,10));
}

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
