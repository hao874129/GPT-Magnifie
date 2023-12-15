var getSelectedTab = (tabs) => {
  var tab = tabs[0]; // Assuming you want the first tab in the list
  var tabId = tab.id;

  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);

  document.getElementById('enlarge ').addEventListener('click', () => sendMessage({ action: 'ENLARGE' }));
  document.getElementById('reset').addEventListener('click', () => sendMessage({ action: 'RESET' }));
}

chrome.tabs.query({ active: true, currentWindow: true }, getSelectedTab);