function numberLetterCounts(limit) {
  let numbers=[];
  let sum=0;

  numbers.push(0);

//1-15
  numbers.push(3);
  numbers.push(3);
  numbers.push(5);
  numbers.push(4);
  numbers.push(4);
  numbers.push(3);
  numbers.push(5);
  numbers.push(5);
  numbers.push(4);
  numbers.push(3);
  numbers.push(6);
  numbers.push(6);
  numbers.push(8);
  numbers.push(8);
  numbers.push(7);

 //14-17
  for(let i=6;i<8;i++)
    numbers.push(numbers[i]+4);

//18-19
    numbers.push(8);
    numbers.push(8);

//20-39
    for(let j=0;j<2;j++)
        for(let i=0;i<10;i++)
            numbers.push(numbers[i]+6);
//40-69
    for(let j=0;j<3;j++)
        for(let i=0;i<10;i++)
            numbers.push(numbers[i]+5);

//70-79
    for(let i=0;i<10;i++)
        numbers.push(7+numbers[i]);

//80-99
    for(let j=0;j<2;j++)
        for(let i=0;i<10;i++)
            numbers.push(numbers[i]+6);

//100-999
    for(let k=1;k<10;k++)
    {
        numbers.push(numbers[k]+7);

        for(let j=1;j<100;j++)
            numbers.push(numbers[k]+7+3+numbers[j])
    }


//1000
    numbers.push(11)

for(let i=1;i<=limit;i++)
    sum+=numbers[i];

    console.log(sum);
}

numberLetterCounts(1000);
