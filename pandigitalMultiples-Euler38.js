function distinct(number){
    let arr=number.split('').sort();

    for(let i=1;i<arr.length;i++)
        if(arr[i-1]==arr[i] || arr[i-1]==0)
            return false;

    return true;
}

function pandigitalMultiples() {
    for(let i=9876;i!=0;i--){
        let num=i.toString()+(i*2).toString()

        if(distinct(num))
<<<<<<< HEAD
            return parseInt(num);
=======
            return num;
>>>>>>> e5e665c8578cb1c99a91bf90411af2a4d35506d8
    }
}

console.log(pandigitalMultiples());
