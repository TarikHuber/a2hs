import React, { Component } from 'react'
import { withA2HS } from '../../src'

const DemoConsumer = ({ setA2HPState, isAppInstallable }) => {
  setTimeout(() => {
    setA2HPState({ isAppInstallable: !isAppInstallable })
  }, 5000)

  console.log('props', { setA2HPState, isAppInstallable })

  return (
    <div>
      <h1>Is App Installable</h1>
      <p>{isAppInstallable ? 'yes' : 'no'}</p>
    </div>
  )
}

export default withA2HS(DemoConsumer)
