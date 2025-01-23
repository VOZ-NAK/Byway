import { createSlice } from '@reduxjs/toolkit'

import { users } from '@/data'
import { IUser } from '@/types'

interface IUsersState {
	users: IUser[]
	isLoading: boolean
	error: string
}

const initialState: IUsersState = {
	users: users,
	isLoading: false,
	error: ''
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {}
})

export default usersSlice.reducer
