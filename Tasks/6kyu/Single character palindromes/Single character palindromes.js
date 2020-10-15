function solve(str){
 if(str.length%2===0){
   let s = str.split('').slice(0,str.length/2).reverse().join('');
   let half_str=str.slice(str.length/2,str.length)
   if(half_str.includes(s))return 'OK';
   
   for(let i =0;i<str.length;i++){
     let str_=str.split('');
     str_.splice(i,1);
     let del = str_.join('');
     let left = del.split('').slice(0,del.length/2).reverse().join('');
     let right=del.slice((del.length/2)+1,del.length)
     if(right == left )return 'remove one';
   }
 }else{
   let s = str.split('').slice(0,str.length/2).reverse().join('');
   let half_str=str.slice((str.length/2)+1,str.length)
   if(half_str.includes(s))return 'OK';
   
   for(let i =0;i<str.length;i++){
     let str_=str.split('');
     str_.splice(i,1);
     let del = str_.join('');
     let left = del.split('').slice(0,del.length/2).reverse().join('');
     let right = del.slice(del.length/2,del.length)
     if(right == left )return 'remove one';
   }
 }
 return 'not possible'; 
};