/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
export default configureStore({
  reducer: {
    cart:cartReducer,
  },
})