function isPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++)
        if(n%i==0)
            return false;
    return true;
}

function pandigital(num){
    let arr=num.toString().split('').sort();

    for(let i=0;i<arr.length;i++)
        if(arr[i]!=i+1)
            return false;

    return true;
}

function pandigitalPrime(n){
    let number="";

    for(let i=n;i>0;i--)
        number+=(i.toString());

    for(let i=parseInt(number);i!=0;i--)
        if(isPrime(i))
            if(pandigital(i))
                return i;
}

console.log(pandigitalPrime(7));
