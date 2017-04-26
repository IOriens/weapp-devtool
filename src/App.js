import React, { Component } from 'react'
import { sendObjectToInspectedPage } from './utils/messaging'
import './App.css'
import JJSONTree from './components/JJSONTree'

const appData = {
  'page/component/index': {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      },
      {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      },
      {
        id: 'form',
        name: '表单组件',
        open: true,
        pages: [
          'button',
          'checkbox',
          'form',
          'input',
          'label',
          'picker',
          'radio',
          'slider',
          'switch',
          'textarea'
        ]
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      },
      {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      },
      {
        id: 'map',
        name: '地图',
        pages: ['map'],
        open: false
      },
      {
        id: 'canvas',
        name: '画布',
        pages: ['canvas'],
        open: false
      }
    ],
    __webviewId__: 0
  },
  'page/component/pages/textarea/textarea': {
    focus: false,
    __webviewId__: 2
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = { appData: {} }
    this.createChannel()

    // sendObjectToInspectedPage({
    //   action: 'script',
    //   content: '../../../getAppData.js'
    // })
    sendObjectToInspectedPage({
      action: 'script',
      content: 'insertedScript/inserted-script.js'
    })
  }

  createChannel () {
    var self = this
    // Create a port with background page for continous message communication
    var port = window.chrome.extension.connect({
      name: 'Sample Communication' // Given a Name
    })

    // Listen to messages from the background page
    port.onMessage.addListener(function (message) {
      self.setState({
        appData: message.msg.appData
      })
    })
  }

  render () {
    return (
      <div className='App'>
        <JJSONTree appData={this.state.appData} />
      </div>
    )
  }
}

export default App
