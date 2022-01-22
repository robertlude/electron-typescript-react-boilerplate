/// External Dependencies

import { configureStore } from '@reduxjs/toolkit'

/// Internal Dependencies

import app from '@s/app'

/// Module

export default configureStore({
  reducer: {
    app,
  },
})
