function getAppData () {
  console.log('getAppData - 1')
  window.postMessage({
    data: {},
    command: 'GET_APP_DATA',
    to: 'appservice'
  }, '*')
}

getAppData()
