import React from 'react'

export const A2HSContext = React.createContext()

// This function takes a component...
export const withA2HS = Component => {
  // ...and returns another component...
  const A2HSComponent = props => {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return <A2HSContext.Consumer>{context => <Component {...props} {...context} />}</A2HSContext.Consumer>
  }

  return A2HSComponent
}

export default A2HSContext
