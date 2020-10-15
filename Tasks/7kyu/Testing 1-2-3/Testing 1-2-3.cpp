#include <string>
#include <vector>

std::vector<std::string> number(const std::vector<std::string> &lines)
{
    vector<string> change;
    for(unsigned i = 0 ; i < lines.size();i++){
      string c = to_string(i+1) + ": " + lines[i];
      change.push_back(c);
    }
         
    return {change};
}