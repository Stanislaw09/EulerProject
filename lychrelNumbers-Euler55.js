const sum=(x, y)=>{
    let a=x.split('')
    let b=y.split('')
    let result=[]
    let dec=0

    //assumes that a and b are the same length
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

const lychrel=n=>{
    let num=n.toString()
    let _num=num

    for(let i=0;i<50;i++){
        num=sum(num, num.split('').reverse().join(''))

        _num=num
        if(_num.split('').reverse().join('')==num)
            return false
    }

    return true
}

function countLychrelNumbers(num){
    let result=0

    for(let i=0;i<num;i++)
        if(lychrel(i))
            result++

    return result
}

console.log(countLychrelNumbers(10000))
