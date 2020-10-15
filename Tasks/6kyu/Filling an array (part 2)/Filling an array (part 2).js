const squares = n => {
  let mas = [];
  for(let i = 0;i<n;i++)mas[i]=Math.pow(i+1,2);
  return mas;
};

const range = (n, start, step) =>{
  let mas = [];
  let s = start;
  mas.push(s);
  for(let i =0;i<n-1;i++){
    s+=step 
    mas.push(s);
  }
  return mas;
};

const random = (n, min, max) =>{
  let mas = [];
  for(let i = 0;i<n;i++)mas[i]=min + Math.floor((max - min+1) * Math.random());
  return mas;
};

function isPrime(number) {
    for(let i=3; (i*i)<=number; i+=2){
        if(number % i == 0 ) return false;
    }
    return true;; 
}

function primes (n){
  let mas = [];
  let number=3;
  if(n!=0)mas.push(2);
  while(mas.length!=n){
    if(isPrime(number))mas.push(number);
    number+=2;
  }
  return mas;
};