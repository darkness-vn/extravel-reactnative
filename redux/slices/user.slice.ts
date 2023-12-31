import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/user.types'

export interface UserState {
    user: User | null
}

const initialState: UserState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }, logout: (state) => {
            state.user = null
        }
    },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer