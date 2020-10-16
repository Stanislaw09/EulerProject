function reverseBinary(n){
    let bin='';

    while(n!=0){
        if(n%2==1)
            bin+='1';
        else
            bin+='0';
        n=Math.floor(n/2);
    }
    return bin;
}

function doubleBasePalindromes(n) {
    let result=0;
    let dec='', bin='';

    for(let i=0;i<=n;i++){
        dec=i.toString();
        bin=reverseBinary(i);

        if(dec==dec.split('').reverse().join(''))
            if(bin==bin.split('').reverse().join(''))
                result+=i;
        }

        return result;
}

console.log(doubleBasePalindromes(1000000));
