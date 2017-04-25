// This sends an object to the background page
// where it can be relayed to the inspected page
function sendObjectToInspectedPage (message) {
  message.tabId = window.chrome.devtools.inspectedWindow.tabId
  window.chrome.extension.sendMessage(message)
}

export { sendObjectToInspectedPage }
