function cubicPermutations(){
    let cubics=[]
    let result=9999999999999

    for(let i=0;i<10000;i++)
        cubics.push([((Math.pow(i, 3)).toString().split('').sort().join('')), i])

    cubics.sort()

    for(let i=0;i<cubics.length-4;i++)
        if(cubics[i][0]==cubics[i+1][0] && cubics[i][0]==cubics[i+2][0] && cubics[i][0]==cubics[i+3][0] && cubics[i][0]==cubics[i+4][0])
            result=Math.min(result, Math.pow(cubics[i][1], 3))

    return result
}

console.log(cubicPermutations())
