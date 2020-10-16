function smallestMult(n) {
  let tab=[];
  let tmp=[];
  let result=1;

  for(let i=0;i<=n;i++)
  {
    tab.push(0);
    tmp.push(0);
  }

  for(let i=n;i>1;i--)
  {
    let num=i;

    for(let j=2;j<=n;j++)
      while(num%j==0)
      {
        tmp[j]++;
        num/=j;
      }

    for(let j=2;j<=n;j++)
    {
      if(tmp[j]>tab[j])
        tab[j]=tmp[j];
      tmp[j]=0;
    }

  }

 for(let i=2;i<=n;i++)
  if(tab[i]!=0)
  {
    for(let k=0;k<tab[i];k++)
      result*=i;
  }
  console.log(result);
}

smallestMult(20);
