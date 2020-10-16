function maximumPathSumI(triangle){
  let arr=triangle

  for(let i=1;i<arr.length;i++)
      for(let j=0;j<arr[i].length;j++)
        if(j==0)
            arr[i][j]+=arr[i-1][j]
        else if(j==arr.length-1)
            arr[i][j]+=arr[i-1][j-1]
        else
          arr[i][j]=Math.max(arr[i][j]+arr[i-1][j], arr[i][j]+arr[i-1][j-1])

  return Math.max(...arr[arr.length-1])
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]]

console.log(maximumPathSumI(testTriangle))
