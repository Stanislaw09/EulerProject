function distinct(num){
    let arr=num.toString().split('').sort();

    for(let i=0;i<arr.length-1;i++)
        if(arr[i+1]==arr[i])
            return false

    return true
}

function pandigitalProducts() {
    let result=0;
    let products=[];

    for(let i=2;i<9;i++)
        for(let j=1234;j<9876;j++){
            if(distinct(j))
            {
                let full=(i*j).toString()+i.toString()+j.toString();
                if(full.length==9   &&   full.indexOf('0')==-1)
                    if(distinct(full)   &&   products.indexOf(i*j)==-1)
                        products.push(i*j)
            }
    }

    for(let i=12;i<98;i++)
        for(let j=123;j<987;j++){
            if(distinct(j))
            {
                let full=(i*j).toString()+i.toString()+j.toString();
                if(full.length==9   &&   full.indexOf('0')==-1)
                    if(distinct(full)   &&   products.indexOf(i*j)==-1)
                        products.push(i*j)
            }
    }

    result=products.reduce((total, item)=>total+item, 0);
    return result;
}

console.log(pandigitalProducts());
