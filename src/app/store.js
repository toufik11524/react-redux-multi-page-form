import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../features/FormSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
})