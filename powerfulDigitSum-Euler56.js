const multipilaction=(val, k)=>{
    let value=val.split('')
    let res=''
    let decimal=0
    let sign=''

    value.unshift('0')

    for(let i=value.length-1;i>=0;i--){
        sign=((parseInt(value[i])*k)+decimal).toString()
        decimal=Math.floor((parseInt(value[i])*k+decimal)/10)
        res+=sign[sign.length-1]
    }

    if(decimal!=0)
        res+=decimal

    let sum=res.split('').reduce((total, item)=>parseInt(total)+parseInt(item))

    return [sum, res.split('').reverse().join('')]
}

function powerfulDigitSum(){
    let result=0

    for(let i=0;i<100;i++){
        let num=i.toString()

        for(let k=0;k<100;k++){
            let out=multipilaction(num, i.toString())
            num=out[1]
            result=Math.max(result, out[0])
        }
    }

    return result
}

console.log(powerfulDigitSum())
