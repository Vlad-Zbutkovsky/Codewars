function solve(st,a,b){
 let str= st.split('');
 let answ = '';
  answ = str.slice(0,a).join('')+str.slice(a,b+1).reverse().join('')+str.slice(b+1,str.length).join('');
  return answ; 
}