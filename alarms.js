(function (){
    'use strict';
    //let alarmName = document.getElementById("countdown");

    let alarmName = "test";

    let alarmExists = false;

    function createAlarm(){
        chrome.alarms.create(alarmName, {delayInMinutes: 1, periodInMinutes: 1});
    }

    function cancelAlarm(){
        chrome.alarms.clear(alarmName);
    }

    function toggleAlarm(){
        if(alarmExists){
            alarmExists=false;
            cancelAlarm();
            console.log('alarm canceled!')
        }
        else{
            alarmExists=true;
            createAlarm();
            console.log('alarm set!')
        }
        
    }
    document.getElementById('setAlarm').addEventListener('click', toggleAlarm);
})();