chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {url:chrome.extension.getURL('').slice(0,-1)}, function(response) {});
});
