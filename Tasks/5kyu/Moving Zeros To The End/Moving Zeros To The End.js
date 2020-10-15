var moveZeros = function (arr) {
  let q =0;
  while(arr.includes(0,0)){
    arr.splice(arr.findIndex(item => item === 0),1);
    q++;
  }
  for(let i=0;i<q;i++)arr.push(0);
  return arr; 
}