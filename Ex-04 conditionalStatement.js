var morning = "Its Morning"
var afterNoon = "Its Afternoon"
var evening = "Its Evening"
var night = "its Night"


var date = new Date();
var hour = date.getHours();
if(hour<12){
    alert(morning)
}else if(hour > 12 && hour <=16 ){
    alert(afterNoon)
}else if(hour > 16 && hour<19){
    alert(evening)
}else{
    alert(night)
}