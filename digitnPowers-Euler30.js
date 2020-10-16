function digitnPowers(n) {
    let result=0;
    let sum=0;
    let powers=[];

    for(let i=0;i<10;i++)
        powers.push(Math.pow(i, n));

        for(let i=10;i<n*Math.pow(9, n);i++){
            let arr=i.toString().split('');

            for(let k=0;k<arr.length;k++)
                sum+=powers[parseInt(arr[k])];

            if(i==sum)
                result+=sum;

            sum=0;
        }

    return result;
}


console.log(digitnPowers(5));
