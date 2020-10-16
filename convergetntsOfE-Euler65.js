const sum=(x, y)=>{
    let a=x.split('')
    let b=y.split('')
    let result=[]
    let dec=0

    while(a.length>b.length)
        b.unshift('0')
    while(b.length>a.length)
        a.unshift('0')

    for(let i=a.length-1;i>=0;i--)
        if(parseInt(a[i])+parseInt(b[i])+dec<10){
            result.push((parseInt(a[i])+parseInt(b[i])+dec).toString())
            dec=0
        }
        else{
            result.push((parseInt(a[i])+parseInt(b[i])+dec-10).toString())
            dec=1
        }

    result.reverse()

    if(dec==1){
        result.unshift('1')
        return result.join('')
    }
    else
        return result.join('')
}

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

    if(res[res.length-1]=='0'){
        let arr=res.split('')
        arr.pop()
        return arr.reverse().join('')
    }

    return res.split('').reverse().join('')
}

const frac=(num, denum, iterator)=>{
    if(iterator==0)
        return [num, denum]

    let numerator=sum(num, denum)
    let denumerator=denum

    let d=numerator

    numerator=sum(numerator, denumerator)
    denumerator=d

    let n=numerator

    numerator=sum(multipilaction(numerator,iterator), denumerator)
    denumerator=n

    return frac(denumerator, numerator, iterator-2)
}

function convergentsOfE(){
    let result=0
    let fraction=[]

    fraction=frac('1', '67', 64)

    let numerator=sum(fraction[0],fraction[1])
    let denumerator=sum(fraction[0],fraction[1])

    numerator=sum(multipilaction(numerator,2),fraction[1])

    numerator.split('').map(item=>result+=parseInt(item))

    return result
}

console.log(convergentsOfE())
