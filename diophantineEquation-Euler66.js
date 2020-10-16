const multipilaction=(val, k)=>{    //k is a number
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

const mult=(x, b)=>{
    let shift=[]
    let result='0'
    let y=b.toString().split('').reverse().join('')

    for(let i=0;i<y.length;i++){
        let _res=multipilaction(x, parseInt(y.slice(i, i+1)))

        let tmp=_res.split('')
        tmp.push(...shift)

        result=sum(result, tmp.join(''))
        shift.push('0')
    }

    return result
}

const frac=(n, up, down, results, counter)=>{
    let denum=(n-Math.pow(up, 2))/down
    let num=(Math.floor((Math.sqrt(n)+up)/denum)*denum)-up

    let denum2=(n-Math.pow(num, 2))/denum
    let num2=(Math.floor((Math.sqrt(n)+num)/denum2)*denum2)-num

    if(counter==0)
        return [1, results[1][2]]

    let int=(Math.floor((down*(Math.sqrt(n)+up))/(n-(up*up))))

    results.push([num, denum, int])

    let fraction=frac(n, num, denum, results, counter-1)
    results.pop()

    return [fraction[1].toString(), sum(multipilaction(fraction[1].toString(), results[results.length-1][2]), fraction[0].toString())]
}

function sieve(n){
    let arr=[]

    for(let i=0;i<n;i++)
        arr.push(1)

    arr[0]=0
    arr[1]=0

    for(let i=2;i<=Math.sqrt(n);i++)
        for(let j=2;i*j<=n;j++)
            arr[i*j]=0

    return arr
}

function diophantineEquation(){
    let great=0
    let result=0

    for(let d=2;d<1000;d++)
        if(!Number.isInteger(Math.sqrt(d)) && d%2!=0)
            for(let i=2;i<100;i++){

                let fraction=frac(d, Math.floor(Math.sqrt(d)), 1, [[0, 0, Math.floor(Math.sqrt(d))]], i)

                let x2=mult(fraction[1].toString(), fraction[1].toString())
                let y2=mult(fraction[0].toString(), fraction[0].toString())

                if(x2==sum(mult(y2,d.toString()),'1')){
                    if(parseInt(x2)>great){
                        great=x2
                        result=d
                    }

                    break
                }
            }

    return result
}

console.log(diophantineEquation())
