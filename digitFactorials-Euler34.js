function digitFactorial() {
    let sum=0;
    let numbers=[];
    let factorials=[1];

    for(let i=1;i<10;i++)
        factorials.push(factorials[i-1]*i);

    for(let i=10;i<100000;i++){
        let total=0;
        let number=i;

        while(number!=0){
            total+=factorials[number%10];
            number=Math.floor(number/10);
        }

        if(total==i){
            sum+=i;
            numbers.push(i);
        }
    }

    return {sum, numbers};
}

console.log(digitFactorial());
