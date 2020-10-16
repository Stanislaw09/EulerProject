function rotate(n){
    let number=n.toString();
    let arr=number.split('');

    arr.push(arr.shift())

    return parseInt(arr.join(''));
}

function sieve(n){
    let arr=[];
    arr[2]=1;
    arr[3]=1;
    let range=Math.pow(10, Math.ceil(Math.log10(n)));

    for(let i=0;i<range;i++)
        arr.push(1);

    for(let i=2;i<=Math.sqrt(range);i++)
        for(let j=2;i*j<=range;j++)
            arr[i*j]=0;

    return arr;
}

function oneNine(n){
    while(n!=0){
        if(n%10%2==0 || n%5==0)
            return false
        n=Math.floor(n/10);
    }
    return true;
}

function circularPrimes(n){
    let primes=sieve(n);
    let result=4;

        for(let i=10;i<n;i++){
            let circular=false;

            if(oneNine(i))
                if(primes[i]==1){
                    circular=true;
                    let number=rotate(i);

                    while(number!=i){
                        if(primes[number]==0)
                            circular=false;
                        number=rotate(number);
                    }
                }

            if(circular==true)
                result++;
        }
        
        return result;
}

console.log(circularPrimes(1000000));
