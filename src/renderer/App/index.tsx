/// External Dependencies

import React, {
  Component,
} from 'react'

import {
  ConnectedProps,
  connect,
} from 'react-redux'

/// Internal Dependencies

import {
  increment,
  decrement,
  incrementByValue,
} from '@s/app'

import { RootState } from '@/store'

/// Module

const mapState = (state: RootState) => ({
  value: state.app.value,
})

const mapDispatch = {
  increment,
  decrement,
  incrementByValue,
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

type State = {}

class App extends Component<Props, State> {
  render() {
    const {
      value,
      increment,
      incrementByValue,
      decrement,
    } = this.props

    return <div>
      <div>{this.props.value}</div>
      <button onClick={() => incrementByValue(5)}>++</button>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => incrementByValue(-5)}>++</button>
    </div>
  }
}

export default connector(App)
