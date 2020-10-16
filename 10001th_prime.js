function nthPrime(n) {
  var tab=[];

  for(let i=2;i<110000;i++)
      tab.push(0);

      for(let i=2;i<325;i++)
      for(let j=2;i*j<105000;j++)
      tab[i*j]=1;

  for(var i=2;n!=0;i++)
    if(tab[i]==0){
      n--;
      if(n==0)
      {
        console.log(i);
        break;
      }
    }

  return i;
}

nthPrime(10001);
