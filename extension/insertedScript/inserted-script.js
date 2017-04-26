function sendObjectToDevTools (message) {
  // The callback here can be used to execute something on receipt
  chrome.extension.sendMessage(message, function (message) {

  })
}

window.addEventListener('message', function (e) {
  var data = e.data || {}
  var msg = data.msg
  var cmd = data.command
  console.log(cmd)
  if (cmd === 'SEND_APP_DATA') {
    console.log(JSON.stringify(msg, null, 2))
    sendObjectToDevTools(data)
  } else if (cmd === 'SHAKE_HANDS') {
    getAppData()
  }
}, false)

function getAppData () {
  window.postMessage({
    data: {
    },
    sdkName: 'GET_APP_DATA',
    command: 'COMMAND_FROM_ASJS',
    msg: {
    },
    to: 'backgroundjs'

  }, '*')
}

getAppData()
