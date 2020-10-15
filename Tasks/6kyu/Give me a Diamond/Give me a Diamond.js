function diamond(n){
  if(n % 2 === 0 || n <= 0){return null}
  
  let answ = '',amount, center = parseInt((n+1)/2);
      
  for (let i=1;i<=n;i++){
    if(i <= center){
      amount = i;
    }else{
      amount = (n-i)+1;
    }
    answ += ' '.repeat(center - amount) + '*'.repeat((amount*2) -1) + '\n';
   } 
  return answ;
}