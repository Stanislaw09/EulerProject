function strong(n){
    let result=1

    if(n==0)
        return 1

    for(let i=n;i!=1;i--)
        result*=i;

    return result
}

function lexicographicPermutations(n) {
      let digits=[0,1,2,3,4,5,6,7,8,9]
      let result=''

      for(let i=9;i>=0;i--){
          let k=Math.floor(n/strong(i))
          n-=k*strong(i);
          result+=digits[k]
          digits.splice(k, 1)
      }

      return result
 }

console.log(lexicographicPermutations(999999))
