try{

const now = new Date();

console.log(now);

var newAlarm;

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      console.log(
        `Storage key "${key}" in namespace "${namespace}" changed.`,
        `Old value was "${oldValue}", new value is "${newValue}".`
      );
    }
  });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    if(request.time){
      newAlarm = request.time;
      console.log(newAlarm);
      sendResponse({response: 'recieved!'});
      chrome.alarms.create(test, {periodInMinutes: newAlarm});
    }
  }
)

chrome.alarms.onAlarm.addListener(function() {
  console.log("Got an alarm!");
});
}
catch (e){
  console.log(e);
}

//here I want to use onAlarm element and also storage.onChanged I think

/*

software structure ideas:

alarm will essentially go off and set off some event.js file, in which we define what we want to say on the event that the alarm rings, I think


I think that I should also make an alarms.html file where I store all of the alarms and the user can configure them on/off

*/