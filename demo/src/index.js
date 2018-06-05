import React, { Component } from 'react'
import { render } from 'react-dom'
import DemoConsumer from './DemoConsumer'
import A2HSProvider from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>a2hs Demo</h1>
      <A2HSProvider>
        <DemoConsumer />
      </A2HSProvider>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
