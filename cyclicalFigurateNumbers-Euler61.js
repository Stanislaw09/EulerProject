function cyclicalFigurateNums(){
    let triangle=[], numbers=[]

    for(let i=1;(i*(i+1)/2)<10000;i++)
        if((i*(i+1)/2)>999)
            triangle.push(i*(i+1)/2)
    for(let i=32;i<100;i++)
        numbers.push([i*i, 4])
    for(let i=26;i<82;i++)
        numbers.push([i*(3*i-1)/2, 5])
    for(let i=23;i<71;i++)
        numbers.push([i*(2*i-1), 6])
    for(let i=21;i<64;i++)
        numbers.push([i*(5*i-3)/2, 7])
    for(let i=19;i<58;i++)
        numbers.push([i*(3*i-2), 8])

    for(let i=0;i<triangle.length;i++)
        for(let j=0;j<numbers.length;j++)
            if(triangle[i]%100===parseInt(numbers[j][0]/100))
                for(let k=0;k<numbers.length;k++)
                    if(numbers[j][0]%100===parseInt(numbers[k][0]/100) && numbers[k][1]!=numbers[j][1])
                        for(let l=0;l<numbers.length;l++)
                            if(numbers[k][0]%100===parseInt(numbers[l][0]/100) && numbers[l][1]!=numbers[j][1] && numbers[l][1]!=numbers[k][1])
                                for(let m=0;m<numbers.length;m++)
                                    if(numbers[l][0]%100===parseInt(numbers[m][0]/100) && numbers[m][1]!=numbers[j][1] && numbers[m][1]!=numbers[k][1] && numbers[m][1]!=numbers[l][1])
                                        for(let n=0;n<numbers.length;n++)
                                            if(numbers[m][0]%100===parseInt(numbers[n][0]/100) && numbers[n][0]%100===parseInt(triangle[i]/100) && numbers[n][1]!=numbers[j][1] && numbers[n][1]!=numbers[k][1] && numbers[n][1]!=numbers[l][1] && numbers[n][1]!=numbers[m][1])
                                                return triangle[i]+numbers[j][0]+numbers[k][0]+numbers[l][0]+numbers[m][0]+numbers[n][0]
}

console.log(cyclicalFigurateNums())
