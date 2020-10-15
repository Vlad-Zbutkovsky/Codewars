function solve(s){
  let numbers = s.split(/[a-z]/);
  numbers.sort((a,b)=>(b-a));
  return parseInt(numbers[0]);
};