function sieve(){
    let arr=[];

    for(let i=0;i<100000;i++)
        arr.push(1);

    arr[0]=0;
    arr[1]=0;

    for(let i=2;i<=Math.sqrt(100000);i++)
        for(let j=2;j*i<=100000;j++)
            arr[i*j]=0;

    return arr;
}

function oneNine(n){
    while(n!=0){
        if(n%10==4 || n%10==6 || n%10==8 || n%10==0)
            return false
        n=Math.floor(n/10);
    }
    return true;
}

function truncatablePrimes(n){
    let result=0;
    let counter=0;
    let primes=sieve();

    for(let i=10;counter<n;i++)
        if(oneNine(i)){
            let num=i;
            let x=true;

            while(num!=0){
                if(primes[num]==0)
                    x=false;
                num=Math.floor(num/10);
            }

            num=i;

            while(num>=10){
                let tmp=num.toString().split('');
                tmp.shift();
                num=parseInt(tmp.join(''));

                if(primes[num]==0)
                    x=false;
            }

            if(x){
                result+=i;
                counter++;
            }
        }

    return result;
}

console.log(truncatablePrimes(11));
