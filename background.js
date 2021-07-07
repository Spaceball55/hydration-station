const now = new Date();

console.log(now);

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      console.log(
        `Storage key "${key}" in namespace "${namespace}" changed.`,
        `Old value was "${oldValue}", new value is "${newValue}".`
      );
    }
  });


//here I want to use onAlarm element and also storage.onChanged I think

/*

software structure ideas:

alarm will essentially go off and set off some event.js file, in which we define what we want to say on the event that the alarm rings, I think


*/