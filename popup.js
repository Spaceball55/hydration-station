var alarm = document.getElementById("alarm");
var alarmButton = document.getElementById("alarmButton");
var cDown = document.getElementById("countdown");
var cDownButton = document.getElementById("cDownButton")

var newAlarm;

alarmButton.addEventListener('click', addAlarm);

cDownButton.addEventListener('click', addCDown);

function addAlarm(){
    console.log("button pressed! \n");
    newAlarm = alarm.value;
    console.log(newAlarm);

    //chrome.runtime.sendMessage({time: newAlarm})

}

function addCDown(){
    console.log("cdown pressed!");
    newAlarm = cDown.value;
    console.log(newAlarm);

    chrome.runtime.sendMessage({time: newAlarm}, function(response) {
        console.log(response.response);
    });
}