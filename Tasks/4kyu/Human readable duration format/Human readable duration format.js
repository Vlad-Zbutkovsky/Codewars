function formatDuration (seconds) {
  if(seconds===0)return "now";
  let time = [-1,-1,-1,0,0,0,0];
  let time_s = [" years"," days"," hours"," minutes"," seconds"];
  let time_one = [" year"," day"," hour"," minute"," second"];
  let s ="",t=","; 
    while(seconds > 0){
        if(seconds >=31536000){
          time[0] = Math.floor(seconds / 31536000);
          seconds -= time[0] * 31536000;
        }else if(seconds >=86400){
          time[1] = Math.floor(seconds / 86400);
          seconds -= time[1] * 86400;
        }else if(seconds >=3600){
          time[2] = Math.floor(seconds / 3600);
          seconds -= time[2] * 3600;
        }else if(seconds >= 60){
          time[3] = Math.floor(seconds / 60);
          seconds -= time[3] * 60;
        }else{
          time[4]=seconds;
          seconds = 0;
        }
     }
  for(let i=0;i<=time.length-2;i++){
    if(time[i+2]===0 && time[i+3]===0 )t=" and";
    if(time[i]===1 && time[i+1]!=0){
      s+=time[i]+time_one[i]+t+" ";
    }else if(time[i]===1 && time[i+1]===0){
      s+=time[i]+time_one[i];
    }else if(time[i]>1 && time[i+1]!=0){
      s+=time[i]+time_s[i]+t+" ";
    }else if(time[i]>1 && time[i+1]===0){
      s+=time[i]+time_s[i];
    }
  }
  return s;
}