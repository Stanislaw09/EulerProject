function countingSundays(firstYear, lastYear) {
  let days=(firstYear-1900)*365;
  let result=0;

  for(let i=1900;i<firstYear;i++)
    if((i%4==0   &&   i%100!=0)  ||   (i%400==0))
        days++;

  if((days-6)%7==0)
    result++;

    days%=7;
    days++;          // 1.1.1901 was monday

  for(let i=firstYear;i<=lastYear;i++){
      days+=31;
      if(days%7==0)     result++;

      if((i%4==0   &&   i%100!=0)  ||   (i%400==0))
        days+=29;
      else
        days+=28;
      if(days%7==0)     result++;

      days+=31;
      if(days%7==0)     result++;

      days+=30;
      if(days%7==0)     result++;

      days+=31;
      if(days%7==0)     result++;

      days+=30;
      if(days%7==0)     result++;

      days+=31;
      if(days%7==0)     result++;

      days+=31;
      if(days%7==0)     result++;

      days+=30;
      if(days%7==0)     result++;

      days+=31;
      if(days%7==0)     result++;

      days+=30;
      if(days%7==0)     result++;

      days+=31;
      if(days%7==0)     result++;
  }

  console.log(result);
}

countingSundays(1901, 2000);
