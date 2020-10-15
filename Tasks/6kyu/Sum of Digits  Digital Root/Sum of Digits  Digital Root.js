function digital_root(n) {
  let str = String(n);
  let mas = str.split('');
while(mas.length!=1){
    let sum =0;
    mas.forEach(item => sum = sum+parseInt(item));
    mas.splice(0,mas.length);
    str =String(sum);
    mas = str.split(''); 
 }
  return parseInt(mas.join(''));
}