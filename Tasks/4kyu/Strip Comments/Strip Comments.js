function solution(input, markers) {
  let answ =[];
  let input_mas=input.split('');
  for(let i =0;i<=input.length;i++){
    let index=i;
    while(!markers.includes(input_mas[i]) && (i<=input.length)){
      i++;
    }
    answ.push(input.substring(index,i).trimRight());
    i++;
    if(i<=input.length){
      while((input_mas[i] !="\n") && i<=input.length){
        i++;
      }
      i--;
    }
  }
  return answ.join('');
};