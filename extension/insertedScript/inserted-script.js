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
  console.log('getAppData')
  // window.postMessage({
  //   data: {},
  //   command: 'GET_APP_DATA',
  //   to: 'appservice'
  // }, '*')

  window.postMessage({
    data: {

    },
    sdkName: 'GET_APP_DATA',
    command: 'COMMAND_FROM_ASJS',
    msg: {
      // data: {},
      // command: 'GET_APP_DATA',
      // to: 'appservice'
    },
    to: 'backgroundjs'

  }, '*')
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

getAppData()
