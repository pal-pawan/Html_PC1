function getTime(){
    var now = new Date();
    var hour = now.getHours();
    if(hour>12){
        hour = hour - 12;
    }
    var minute = now.getMinutes();
    var second = now.getSeconds();
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
}
setInterval(getTime, 1000);