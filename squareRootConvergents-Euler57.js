let result=0

const square=(numerator, denumerator, index)=>{
    let _numerator=denumerator
    let _denumerator=denumerator*2+numerator

    if(parseInt(Math.log10(denumerator+_denumerator))>10){
        _denumerator=parseInt(_denumerator/10)
        _numerator=parseInt(_numerator/10)
    }

    if(index===1000)
        return

    if(parseInt(Math.log10(denumerator+_denumerator))>parseInt(Math.log10(_denumerator)))
        result++

    return square(_numerator, _denumerator, index+1)
}

function squareRootConvergents(){
    square(1, 2, 1)

    return result
}

console.log(squareRootConvergents())
