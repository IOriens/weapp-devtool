import React, { Component } from 'react'
import './JJSONTree.css'
import JSONTree from 'react-json-tree'

class JJSONTree extends Component {
  constructor (props) {
    super(props)
    // var self = this

    this.state = {
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
    // Check if it's a new user, you can also use some unique, like the ID
    if (JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) {
      this.setState({data: this.purifyData(this.props.appData)})
    }
  }

  render () {
    return (
      <div className='j-json-tree'>
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
