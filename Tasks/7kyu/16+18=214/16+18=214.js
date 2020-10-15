function add(num1, num2) {
  let ups = String(num1);
  let downs = String(num2);
  let answ =[];
  let up = ups.split('');
  let down = downs.split('');
  
  if (num1 < 10 || num2 <10) return num1+num2; 
  
  if(up.length < down.length){
    for(let i = 0; i<down.length - up.length;i++){
      up.unshift(0);
   }
  }else if(up.length > down.length){
    for(let i =0; i<up.length - down.length;i++){
      down.unshift(0);
    }
  }
  let flen = parseInt(up.length -1);
  let slen = parseInt(down.length -1);
  
  for(let i = flen; i != -1; i--){
    answ.unshift(parseInt(up[flen--]) + parseInt(down[slen--]));
  }
  
  let answ_int = parseInt(answ.join(''));
   
  return answ_int;
}