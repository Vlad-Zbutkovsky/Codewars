function solve(arr){
  for(let i = arr.length;i>0;i--){
    for(let j = 0;j<i;j++){
      if(arr[i]===arr[j])arr.splice(j,1);
    }
  }
  return arr;
}