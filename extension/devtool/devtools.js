// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create(
  'Weapp',
  '../assets/toast.png',
  '../panel/index.html',
  function (panel) {}
)
