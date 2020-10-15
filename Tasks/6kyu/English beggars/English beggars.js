function beggars(values, n){
  let answ = [];
  for(let i=0;i<n;i++){
    let q =0;
    for(let j=i;j<values.length;j+=n){
      if(j>values.length)break;
      q+=parseInt(values[j]);
    }
    answ.push(q);
  }
  return answ; 
}