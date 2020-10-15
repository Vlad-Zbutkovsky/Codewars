function wave(str){
  let mas =[];
  for(let i =0;i<str.length;i++){
    let s  = '';
    if(str[i]==' ')continue;
    s+=str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1,str.length);
    mas.push(s);
  }
  return mas; 
}