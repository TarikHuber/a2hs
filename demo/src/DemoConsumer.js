import React, { Component } from 'react'
import { withA2HS } from '../../src'

class DemoConsumer extends Component {

  componentDidMount() {
    const { setA2HPState } = this.props


    setA2HPState({ isAppInstallable: true })

  }


  render() {
    const { isAppInstallable } = this.props

    console.log(this.props)

    return <div>
      <h1>Is App Installable</h1>
      <p>{isAppInstallable ? 'yes' : 'no'}</p>
    </div>
  }
}

export default withA2HS(DemoConsumer)

