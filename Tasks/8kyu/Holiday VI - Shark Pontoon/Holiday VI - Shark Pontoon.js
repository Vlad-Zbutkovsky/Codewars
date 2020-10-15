function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    return parseInt(dolphin === true ? sharkDistance/(sharkSpeed/2):sharkDistance/sharkSpeed) >= parseInt(pontoonDistance/youSpeed) ? "Alive!":"Shark Bait!"; 
}