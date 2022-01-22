/// External Dependencies

import React        from 'react'
import ReactDOM     from 'react-dom'
import { Provider } from 'react-redux'

/// Internal Dependencies

import App from './App'

import store from '@/store'

/// Module

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
