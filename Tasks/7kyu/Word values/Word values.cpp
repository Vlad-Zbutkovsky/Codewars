#include<string>
#include<vector>
using namespace std;

vector<int> wordValue(vector <string> arr){
  
  vector <int> answ; 
  
  for (int i = 0; i < arr.size();i++){
    string x = arr[i];
     int sum = 0;
     for (int j = 0; j < x.length();j++){
      if(x[j]==' ')continue;
       sum +=  (int(x[j]) - 96);
    }
    sum = sum * (i + 1);  
    answ.push_back(sum);
  }
  return answ;
}