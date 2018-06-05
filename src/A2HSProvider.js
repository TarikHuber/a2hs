import React, { Component } from 'react'
import PropTypes from 'prop-types'
import A2HSContext, { initialState } from './themeContext'

class A2HSProvider extends Component {

  setA2HPState = (newState) => {
    this.setState({ ...newState })
  }

  state = {
    ...initialState,
    setA2HPSState: this.setA2HPState
  }

  componentDidMount() {

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.setState({ deferredPrompt: e, isAppInstallable: true })
      console.log('deffered prompt saved')
    });

    window.addEventListener('appinstalled', (evt) => {
      this.setState({ isAppInstalled: true })
    });
  }

  render() {
    return <A2HSContext.Provider value={this.state}>{this.props.children}</A2HSContext.Provider>
  }
}

export default A2HSProvider