var maxSequence = function(arr){
  let sum = 0, sum_cur = 0;

  for (let item of arr) { 
    sum_cur += item; 
    sum = Math.max(sum, sum_cur); 
    if (sum_cur < 0) sum_cur = 0; 
  }

  return sum;
}