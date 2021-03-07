import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { createStore } from 'redux'

//ACTIONS
const increment = () => {
    return { type: 'INCREMENT' }
}
const decrement = () => {
    return { type: 'DECREMENT' }
}

//REDUCER
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        default         : return state
    }
}

//STORE
const store = createStore(counter)

//Visualize it on console
store.subscribe(() => console.log(store.getState()))

//DISPATCHES
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

render(<App />, document.getElementById('root'))