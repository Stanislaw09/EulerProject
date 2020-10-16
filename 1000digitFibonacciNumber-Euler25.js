function digitFibonacci(n) {
  let fib=[0, 1, 1]
  for(let i=3;;i++){
      fib.push(fib[i-1]+fib[i-2])
        if(fib[i].toString().length==n)
            return i;
  }
}

console.log(digitFibonacci(20))
