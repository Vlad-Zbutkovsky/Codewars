function remember(str) {
  let mas =[], answ=[];
  str.split('').map(function (noni){
    mas[noni]=mas[noni]?mas[noni]+1:1;
    if(mas[noni]===2)answ.push(noni);
  });
  return answ;
}