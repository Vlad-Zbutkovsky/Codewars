function dup(s) {
  let answ = [];
  for (let item of s) {
    let str = item.split('');
    for(let i = 0;i<str.length;i++){
      if(str[i]==str[i+1])str.splice(i--,1);
    }
    answ.push(str.join(''));
  }
  return answ;
};