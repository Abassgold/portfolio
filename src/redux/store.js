import { configureStore } from '@reduxjs/toolkit'
import features from './features'

export const store = configureStore({
  reducer: {
    features 
  }
})

