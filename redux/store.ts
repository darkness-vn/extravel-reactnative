import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth.slice'
import userSlice from './slices/user.slice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store