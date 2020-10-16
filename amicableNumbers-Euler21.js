function amicable(num){
    let sum=0;

    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i==0){
            sum+=i;
            sum+=(num/i);
        }

        if(Number.isInteger(Math.sqrt(num)))
            sum+=Math.sqrt(num);
    }

    return sum+1;
}

function sumAmicableNum(n) {
  let arr=[];

  let result=0;
  let ami1, ami2;

  for(let i=0;i<=n;i++)
    arr.push(1);

    for(let i=2;i<=n;i++)
        if(arr[i]==1){
            ami2=amicable(amicable(i));
            ami1=amicable(i);

            if(ami2==i &&  ami1!=i){
                result+=i;

                if(ami1<n)
                    result+=ami1;
            }

            arr[ami1]=0;
            arr[ami2]=0;
        }

    return result;
}

console.log(sumAmicableNum(10000));
