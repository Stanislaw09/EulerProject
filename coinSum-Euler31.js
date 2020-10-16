function coinSums(n){
    let result=0;

    for(let a=0;a<=n/200;a++)
    for(let b=0;b<=n/100;b++)
    for(let c=0;c<=n/50;c++)
    for(let d=0;d<=n/20;d++)
    for(let e=0;e<=n/10;e++)
    for(let f=0;f<=n/5;f++)
    for(let g=0;g<=n/2;g++){
        let sum=200*a+100*b+50*c+20*d+10*e+5*f+2*g;

        if(sum<=n)
            result++;
        else break;
    }
    return result
}

console.log(coinSums(200));
