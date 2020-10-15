function spacey(arr){
  let answ = [];
  for (let i=0;i<=arr.length-1;i++){
    answ[i]=arr.slice(0,i+1).join('');
  }
  return answ; 
}