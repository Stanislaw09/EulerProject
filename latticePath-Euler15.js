function latticePaths(gridSize) {
  let arr=[];

  for(let i=0;i<gridSize;i++)
  {
    let verse=[];

    for(let j=0;j<gridSize;j++)
      if(i==0)
        verse.push(j+2);
      else if(j==0)
        verse.push(i+2);
      else
        verse.push(0);

    arr.push(verse);
  }

  for(let i=1;i<gridSize;i++)
    for(let j=1;j<gridSize;j++)
      arr[i][j]=arr[i-1][j]+arr[i][j-1];

  return arr[gridSize-1][gridSize-1];
}

console.log(latticePaths(9));
