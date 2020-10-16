const straightFlush=hand=>{
    for(let i=0;i<4;i++)
        if(hand[i+1][0]!=hand[i][0]+1 || hand[i+1][1]!=hand[i][1])
            return false

    return hand[4][0]
}

const four=hand=>{
    if(hand[0][0]==hand[1][0] && hand[1][0]==hand[2][0] && hand[2][0]==hand[3][0])
        return hand[0][0]
    if(hand[1][0]==hand[2][0] && hand[2][0]==hand[3][0] && hand[3][0]==hand[4][0])
        return hand[1][0]

    return false
}

const house=hand=>{
    if(three(hand) && pair(hand))
        return three(hand)
}

const flush=hand=>{
    for(let i=0;i<4;i++)
        if(hand[i][1]!=hand[i+1][1])
            return false

    return true
}

const straight=hand=>{
    for(let i=0;i<4;i++)
        if(hand[i+1][0]!=hand[i][0]+1)
            return false

    return hand[4][0]
}

const three=hand=>{
    let copy=[...hand]
    copy.push([0, 'X'])
    copy.unshift([0, 'X'])

    for(let i=1;i<4;i++)
        if(copy[i][0]==copy[i+1][0] && copy[i+1][0]==copy[i+2][0] && copy[i+2][0]!=copy[i+3][0] && copy[i-1][0]!=copy[i][0])
            return copy[i][0]

    return false
}

const twoPairs=hand=>{
    let hand2=[...hand]

    hand2.sort((a, b)=>{
        return b[0]-a[0]
    })

    if(pair(hand) && pair(hand2) && pair(hand)!=pair(hand2))
        return pair(hand2)

    return false
}

const pair=hand=>{
    let copy=[...hand]
    copy.push([0, 'X'])
    copy.unshift([0, 'X'])

    for(let i=1;i<5;i++)
        if(copy[i][0]==copy[i+1][0] && copy[i+1][0]!=copy[i+2][0] && copy[i-1][0]!=copy[i][0])
            return copy[i][0]

    return false
}

const replace=hand=>{
    let result=[]
    let str=hand.replace(/T/g, '10')
    str=str.replace(/J/g, '11')
    str=str.replace(/Q/g, '12')
    str=str.replace(/K/g, '13')
    str=str.replace(/A/g, '14')

    let arr=str.split(' ')

    arr.forEach(item=>
        item.length==2 ? result.push([parseInt(item[0]), item[1]]) : result.push([parseInt(item.slice(0,2)), item[2]]))

    return result
}

const win=(first, second)=>{
    let hand1=0
    let hand2=0

    if(straightFlush(first))
        hand1=900+straightFlush(first)
    else if(four(first))
        hand1=800+four(first)
    else if(house(first))
        hand1=700+house(first)
    else if(flush(first))
        hand1=600+flush(first)
    else if(straight(first))
        hand1=500+straight(first)
    else if(three(first))
        hand1=400+three(first)
    else if(twoPairs(first))
        hand1=300+twoPairs(first)
    else if(pair(first))
        hand1=200+pair(first)
    else
        hand1=first[4][0]

    if(straightFlush(second))
        hand2=900+straightFlush(second)
    else if(four(second))
        hand2=800+four(second)
    else if(house(second))
        hand2=700+house(second)
    else if(flush(second))
        hand2=600+flush(second)
    else if(straight(second))
        hand2=500+straight(second)
    else if(three(second))
        hand2=400+three(second)
    else if(twoPairs(second))
        hand2=300+twoPairs(second)
    else if(pair(second))
        hand2=200+pair(second)
    else
        hand2=second[4][0]

    for(let i=4;hand1==hand2 && i>=0;i--){
        hand1+=first[i][0]
        hand2+=second[i][0]
    }

    if(hand1>hand2)
        return 1
    else
        return 0
}

function pokerHands(arr){
    let result=0

    for(let i=0;i<arr.length;i++){
        let first=replace(arr[i].slice(0, 14))
        let second=replace(arr[i].slice(15, 30))

        first.sort((a, b)=>{
            return a[0]-b[0]
        })
        second.sort((a, b)=>{
            return a[0]-b[0]
        })

        result+=win(first, second)
    }

    return result
}

const testArr=[
  '8C TS KC 9H 4S 7D 2S 5D 3S AC',
  '5C AD 5D AC 9C 7C 5H 8D TD KS',
  '3H 7H 6S KC JS QH TD JC 2D 8S',
  'TH 8H 5C QS TC 9H 4D JC KS JS',
  '7C 5H KC QH JD AS KH 4C AD 4S'
];

console.log(pokerHands(testArr))
