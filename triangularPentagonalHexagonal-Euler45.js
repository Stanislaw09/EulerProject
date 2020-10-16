function pentagonalDelta(num){
    let D=Math.sqrt(0.25+(6*num))

    if(!Number.isInteger(D*10))
        return false

    if(Number.isInteger((0.5-D)/3) && (0.5-D)/3>0)
        return (0.5-D)/3
    if(Number.isInteger((0.5+D)/3) && (0.5+D)/3>0)
        return (0.5+D)/3

    return false
}

function triangularDelta(num){
    let D=Math.sqrt(0.25+(2*num))

    if(!Number.isInteger(D*10))
        return false

    if(Number.isInteger(0.5-D) && 0.5-D>0)
        return 0.5-D
    if(Number.isInteger(0.5+D) && 0.5+D>0)
        return 0.5+D

    return false
}

function triPentaHexa(n){
    for(let i=144;;i++)
        if(pentagonalDelta(i*(2*i-1))!==false)
            if(triangularDelta(i*(2*i-1))!==false)
                return i*(2*i-1);
}

console.log(triPentaHexa(40756));
