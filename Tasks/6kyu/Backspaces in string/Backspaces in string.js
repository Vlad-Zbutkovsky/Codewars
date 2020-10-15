function cleanString(s) {
  let mas = s.split('');
  for(let i = 0; i<mas.length;i++){
    if(mas[i+1] === '#' && mas[i] != '#'){
      mas.splice(i,2);
      i>=2?i-=2:i=-1;
      }; 
    };
  return mas.filter(a=>a!='#').join('');
};