import React from 'react'

export const initialState = {
    deferredPrompt: () => { },
    isAppInstallable: false,
    isAppInstalled: false
}

export const A2HSContext = React.createContext(
    initialState
)

// This function takes a component...
export function withA2HS(Component) {
    // ...and returns another component...
    return function A2HSComponent(props) {
        // ... and renders the wrapped component with the context theme!
        // Notice that we pass through any additional props as well
        return (
            <A2HSContext.Consumer>
                {context => <Component {...props} {...context} />}
            </A2HSContext.Consumer>
        );
    };
}

export default A2HSContext