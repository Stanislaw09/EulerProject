function spiralDiagonals(n) {
  let result=1;

  for(let i=3;i<=n;i+=2){
      result+=Math.pow(i, 2);
      result+=Math.pow(i, 2)-i+1;
      result+=Math.pow(i, 2)-2*i+2;
      result+=Math.pow(i, 2)-3*i+3;
  }

  return result;
}

console.log(spiralDiagonals(1001));
