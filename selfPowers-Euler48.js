function digits(num,x){
    let result=num
    let range=Math.pow(10,x)

    for(let i=1;i<num;i++){
        result*=num

        if(result>range){
            let arr=result.toString().split('')
            while(arr.length>x)
                arr.shift()
            result=parseInt(arr.join(''))
        }
    }

    return result
}

function selfPowers(power, lastDigits){
    let result=0

    for(let i=0;i<power;i++)
        result+=digits(i,lastDigits)

    while(result>Math.pow(10,lastDigits)){
        let arr=result.toString().split('')
        arr.shift()
        result=parseInt(arr.join(''))
    }

    return result
}

console.log(selfPowers(1000,10));
