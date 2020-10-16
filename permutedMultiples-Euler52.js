const permutation=n=>{
    let sorted=n.toString().split('').sort().join('')

    for(let i=2;i<7;i++)
        if((n*i).toString().split('').sort().join('')!=sorted)
            return false

    return true
}

function permutedMultiples(){
    for(let i=100000;i<170000;i++)
        if(permutation(i))
            return i
}

console.log(permutedMultiples())
