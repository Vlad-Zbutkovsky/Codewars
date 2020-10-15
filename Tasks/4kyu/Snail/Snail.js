snail = function(ar) {
  let answ =[],t=0;
  if(String(ar)==[[undefined]])return answ;
  while(answ.length!=ar.length*ar.length){
    let first=0,second=1,third=ar.length-1;
    first+=t;
    second+=t;
    third-=t;
    for(let i=first;i<=third;i++){
      answ.push(ar[t][i]);
  }
    if(answ.length===ar.length*ar.length)return answ;
    for(let i=second;i<=third;i++){
      answ.push(ar[i][third]);
  }
     if(answ.length===ar.length*ar.length)return answ;
    for(let i=third-1;i>=t;i--){
      answ.push(ar[third][i]);
  }
     if(answ.length===ar.length*ar.length)return answ;
    for(let i=third-1;i>=t+1;i--){
      answ.push(ar[i][t]);
  }
     if(answ.length===ar.length*ar.length)return answ;
    
    t++;
  }
  return answ;
}