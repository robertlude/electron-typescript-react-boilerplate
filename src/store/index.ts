/// External Dependencies

import { configureStore } from '@reduxjs/toolkit'

/// Internal Dependencies

import app from '@s/app'

/// Module

const store = configureStore({
  reducer: {
    app,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState   = ReturnType<typeof store.getState>

export default store
