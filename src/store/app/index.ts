/// External Dependencies

import {
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit'

/// Module

type AppState = {
  value: number,
}

const initialState: AppState = {
  value: 0,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    decrement: state => { state.value -= 1 },
    increment: state => { state.value += 1 },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const {
  decrement,
  increment,
  incrementByValue,
} = appSlice.actions

export default appSlice.reducer
