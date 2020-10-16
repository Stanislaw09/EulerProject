function delta(num){
    let D=Math.sqrt(0.25+(6*num))

    if(!Number.isInteger(D*10))
        return false

    if(Number.isInteger((0.5-D)/3) && (0.5-D)/3>0)
        return (0.5-D)/3
    if(Number.isInteger((0.5+D)/3) && (0.5+D)/3>0)
        return (0.5+D)/3

    return false
}

function pentagonNumbers(){
    let pentagons=[]

    for(let i=0;i<10000;i++)
        pentagons.push(i*(3*i-1)/2)

    for(let i=1;i<10000;i++)
        for(let j=1;j<10000;j++)
            if(delta(Math.abs((pentagons[i]-pentagons[j])))!=false)
                if(delta(Math.abs((pentagons[i]+pentagons[j])))!=false)
                    return Math.abs((pentagons[i]-pentagons[j]))
}

console.log(pentagonNumbers());
