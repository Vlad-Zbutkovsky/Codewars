function pigIt(str){
  let answ = [], mas = str.split(' ');
  for(let i =0;i<mas.length;i++){
    let st = String(mas[i]).split('');
    let f = st.splice(0,1);
    String(f) !='?' && String(f) !='!'&& String(f) !='.'&& String(f) !=','?st.push(f+'ay'):st.push(f);
    answ.push(st.join('')); 
  } 
  return answ.join(' ');}