function pandigital(num){
    let arr=num.toString().split('').sort();

    for(let i=1;i<arr.length;i++)
        if(arr[i-1]==arr[i])
            return false

    return true;
}

function newDigit(number){
    const level=Math.floor(Math.log10(number))+1;
    const num=(number%100)*10;

    if(level==3)
        for(let i=0;i<10;i++)
            if(pandigital((number*10)+i) && (num+i)%2==0)
                newDigit((number*10)+i);

    if(level==4)
        for(let i=0;i<10;i++)
            if(pandigital((number*10)+i) && (num+i)%3==0)
                newDigit((number*10)+i);

    if(level==5)
        for(let i=0;i<10;i++)
            if(pandigital((number*10)+i) && (num+i)%5==0)
                newDigit((number*10)+i);

    if(level==6)
        for(let i=0;i<10;i++)
            if(pandigital((number*10)+i) && (num+i)%7==0)
                newDigit((number*10)+i);

    if(level==7)
        for(let i=0;i<10;i++)
            if(pandigital((number*10)+i) && (num+i)%11==0)
                newDigit((number*10)+i);

    if(level==8)
        for(let i=0;i<10;i++)
            if(pandigital((number*10)+i) && (num+i)%13==0)
                newDigit((number*10)+i);

    if(level==9)
        for(let i=0;i<10;i++)
            if(pandigital((number*10)+i) && (num+i)%17==0){
                arr.push((number*10)+i);
                break;
            }
}

let arr=[];

function substringDivisibility(){
    for(let a=1;a<10;a++)
        for(let b=0;b<10;b++)
             for(let c=0;c<10;c++)
                 newDigit(100*a+10*b+c);

    return arr;
}

console.log(substringDivisibility());
