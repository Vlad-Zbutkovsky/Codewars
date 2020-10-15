function humanReadable(seconds) {
   let hours = 0,min=0,sec=0;
    while(seconds > 0){
        if(seconds >=3600){
          hours = Math.floor(seconds / 3600);
          seconds -= hours * 3600;
        }else if(seconds >= 60){
          min = Math.floor(seconds / 60);
          seconds -= min * 60;
        }else{
          sec=seconds;
          seconds = 0;
        }
     }
  
  if(hours<10) hours='0'+hours;
  if(min<10) min='0'+min;
  if(sec<10) sec='0'+sec;
  let s = hours+':'+ min +':'+ sec; 
  return s; 
}