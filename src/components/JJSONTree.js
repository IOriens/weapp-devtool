import React, { Component } from 'react'
import './JJSONTree.css'
import JSONTree from 'react-json-tree'

class JJSONTree extends Component {
  constructor (props) {
    super(props)
    // var self = this

    this.state = {
      data: this.purifyData({'page/component/index': {'list': [{'id': 'view', 'name': '视图容器', 'open': false, 'pages': ['view', 'scroll-view', 'swiper']}, {'id': 'content', 'name': '基础内容', 'open': false, 'pages': ['text', 'icon', 'progress']}, {'id': 'form', 'name': '表单组件', 'open': false, 'pages': ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']}, {'id': 'nav', 'name': '导航', 'open': false, 'pages': ['navigator']}, {'id': 'media', 'name': '媒体组件', 'open': false, 'pages': ['image', 'audio', 'video']}, {'id': 'map', 'name': '地图', 'pages': ['map']}, {'id': 'canvas', 'name': '画布', 'pages': ['canvas']}], '__webviewId__': 0}})
    }
  }

  purifyData (dataSet) {
    const ret = []
    for (let i in dataSet) {
      const data = Object.assign({}, dataSet[i])
      delete data['__webviewId__']

      ret.push({
        name: i,
        value: data
      })
    }
    return ret
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    this.setState({
      data: nextProps
    })
    // Check if it's a new user, you can also use some unique, like the ID
    // if (JSON.stringify(this.props.appData) !== JSON.stringify(nextProps.appData)) {
    // this.setState({data: this.purifyData(this.props.appData)})
    // }
  }

  render () {
    return (
      <div className='j-json-tree'>
        <div>{JSON.stringify(this.state.data)}</div>
        {this.state.data.map(function (element) {
          return (
            <div>              
              <div className='tree-name'>{element.name}:</div>
              <JSONTree data={element.value} hideRoot />
            </div>
          )
        })}
      </div>
    )
  }
}

export default JJSONTree
