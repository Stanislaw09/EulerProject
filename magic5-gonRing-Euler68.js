const outer=nums=>{
    let inner=[]
    let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for(let i=0;i<5;i++)
        arr=arr.filter(x=>x!=nums[i])

    nums.push(nums[0])

    for(let i=0;i<5;i++)
        inner.push(nums[i]+nums[i+1])

    inner.sort()

    if(inner[0]+arr[4]==inner[1]+arr[3] && inner[1]+arr[3]==inner[2]+arr[2] && inner[2]+arr[2]==inner[3]+arr[1] && inner[3]+arr[1]==inner[4]+arr[0])
        return inner[0]+arr[4]

    return false
}

function magic5GonRing(){
    let sums=[]
    let result='9'

    for(let a=1;a<10;a++)
        for(let b=1;b<10;b++)
            if(b!=a)
                for(let c=1;c<10;c++)
                    if(c!=b && c!=a)
                        for(let d=1;d<10;d++)
                            if(d!=c && d!=b && d!=a && d+c!=a+b)
                                for(let e=1;e<10;e++)
                                    if(e!=d && e!=a && e!=b && e!=c && e+d!=c+b && a+e!=d+c)
                                        if(outer([a, b, c, d, e])!=false){
                                            let sum=outer([a, b, c, d, e])
                                            let start=Math.max(a, b, c, d, e)+1

                                            let chain=(sum-(a+b)).toString()+a.toString()+b.toString()+(sum-(b+c)).toString()+b.toString()+c.toString()+(sum-(c+d)).toString()+c.toString()+d.toString()+(sum-(d+e)).toString()+d.toString()+e.toString()+(sum-(a+e)).toString()+e.toString()+a.toString()

                                            if(chain[0]==start.toString() && parseInt(chain)>parseInt(result))
                                                result=chain
                                        }
    return parseInt(result)
}

console.log(magic5GonRing())
