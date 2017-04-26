import React, { Component } from 'react'
import './JJSONTree.css'
import JSONTree from 'react-json-tree'

class JJSONTree extends Component {
  constructor (props) {
    super(props)
    // var self = this

    this.state = {
      appData: this.props.appData,
      data: this.purifyData(this.props.appData)
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
    const self = this
    if (JSON.stringify(this.props.appData) !== JSON.stringify(nextProps.appData)) {
      this.setState({
        appData: nextProps.appData,
        data: self.purifyData(nextProps.appData)
      })
    }
  }

  render () {
    return (
      <div className='j-json-tree'>
        {
           this.state.data.map(function (element) {
             return (
               <div>
                 <div className='tree-name'>{element.name}:</div>
                 <JSONTree data={element.value} hideRoot />
               </div>
             )
           })
      }
      </div>
    )
  }
}

export default JJSONTree
