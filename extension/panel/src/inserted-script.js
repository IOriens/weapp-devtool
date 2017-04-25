// This is included and executed in the inspected page
function inserted () {
  console.log('External script attached')
}
inserted()

function sendObjectToDevTools (message) {
  // The callback here can be used to execute something on receipt
  chrome.extension.sendMessage(message, function (message) {

  })
}

function getAppData () {
  window.postMessage({
    data: {},
    command: 'GET_APP_DATA',
    to: 'appservice'
  }, '*')
}

window.addEventListener('message', function (e) {
  var data = e.data || {}
  var msg = data.msg
  var cmd = data.command
  if (cmd === 'SEND_APP_DATA') {
    console.log(JSON.stringify(msg, null, 2))
    sendObjectToDevTools(data)
  } else if (cmd === 'SHAKE_HANDS') {
    getAppData()
  }
}, false)

getAppData()
