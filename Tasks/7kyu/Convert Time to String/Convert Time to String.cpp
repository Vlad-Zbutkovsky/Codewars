#include <string>


using namespace std;

string convertTime(int timeDiff)
{
  string time ="";
  bool x = 0;
  int day=0,hour=0,minute=0,second=0;
  if (timeDiff<0){
    timeDiff = timeDiff * -1;
    x = 1;
  } 
    while(timeDiff > 0){
      if(timeDiff > 86400){
        day = timeDiff / 86400;
        timeDiff -= day * 86400;
      }else if(timeDiff > 3600){
        hour = timeDiff / 3600;
        timeDiff -= hour * 3600;
      }else if(timeDiff >= 60){
        minute = timeDiff / 60;
        timeDiff -= minute * 60;
      }else{
        second=timeDiff;
        timeDiff = 0;
      }
   }
  
  if(x==true){
    time += to_string(day * (-1));
    time += ' ' + to_string(hour * (-1));
    time += ' ' + to_string(minute * (-1));
    time += ' ' + to_string(second * (-1));
    
  }else{
    time +=to_string(day);
    time += ' ' + to_string(hour);
    time += ' ' + to_string(minute);
    time += ' ' + to_string(second); 
  }
  return time;
}