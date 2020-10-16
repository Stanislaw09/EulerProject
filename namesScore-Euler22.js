function namesScores(arr) {
  arr.sort();
  let result=0;

  for(let i=0;i<arr.length;i++){
      let sum=0;

      for(let j=0;j<arr[i].length;j++)
         sum+=arr[i].charCodeAt(j)-64;

      result+=sum*(i+1);
  }
  return result;
}


const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(namesScores(test2));
