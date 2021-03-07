import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import allReducers from './reducers'
import signIn from "./actions/signIn";
import increment from "./actions/increment";
import decrement from "./actions/decrement";

const store = createStore(allReducers)
store.subscribe(() => console.log(store.getState()))
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(signIn())

render(<App />, document.getElementById('root'))








