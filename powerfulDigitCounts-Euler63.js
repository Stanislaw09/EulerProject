function powerfulDigitCounts(){
    let result=0

    for(let i=1;i<10;i++)
        for(let k=1;k<30;k++)
            if(Math.pow(i, k).toString().length==k)
                result++
            else
                break

    return result
}

console.log(powerfulDigitCounts())
