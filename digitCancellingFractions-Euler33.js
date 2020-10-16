function digitCancellingFractions() {
    let resultNumerator=1, resultDenumerator=1;
    let numerator, denumerator;

  for(let a=1;a<10;a++)
    for(let b=0;b<10;b++)
        for(let c=1;c<10;c++)
            for(let d=0;d<10;d++){
                numerator=parseInt(10*a+b);
                denumerator=parseInt(10*c+d);

                if(numerator<denumerator    &&    numerator/denumerator==a/d    &&  a!=b    &&    b==c){
                    resultNumerator*=a;
                    resultDenumerator*=d;
                }
            }

    for(let i=2;i<resultDenumerator && resultDenumerator!=1;i++)
        while(resultNumerator%i==0  &&  resultDenumerator%i==0){
            resultNumerator/=i;
            resultDenumerator/=i;
        }
            return resultDenumerator;
}

console.log(digitCancellingFractions());
