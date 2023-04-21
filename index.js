const const_val=00;
var GO=false;
var reset=document.getElementById("reset");
var stop=document.getElementById("stop");
var start=document.getElementById("start");
var sec=document.getElementById("sec");
var milli=document.getElementById("milli");
var secs=0;
var millis=0;
function update(element_to_update,update_value){
if(update_value<10){update_value="0"+update_value;}
element_to_update.innerHTML=update_value;
}
reset.onclick=function(){
GO=false;
secs=const_val;
mins=const_val;
update(sec,const_val);
update(milli,const_val);
}
start.onclick=function(){
GO=true;
}
stop.onclick=function(){
GO=false;
}
setInterval(function(){
if(GO==true){
millis+=1;
if(millis==100){millis=0;
secs+=1;
update(sec,secs);
}
update(milli,millis);
}
}
,1);