import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  reducers from './reducers/comine'
import App from './components/App'


const store = createStore(reducers)
render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)