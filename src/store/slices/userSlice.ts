import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser } from '../../types'
import {
	createUser,
	deleteUser,
	fetchUsers,
	updateUser
} from '../api/userActions'

// State interface
interface IUserState {
	users: IUser[]
	isLoading: boolean
	error: string | null
}

const initialState: IUserState = {
	users: [],
	isLoading: false,
	error: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// Fetch users
			.addCase(fetchUsers.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchUsers.fulfilled,
				(state, action: PayloadAction<IUser[]>) => {
					state.isLoading = false
					state.users = action.payload
					state.error = null
				}
			)
			.addCase(fetchUsers.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})

			// Create user
			.addCase(createUser.pending, state => {
				state.isLoading = true
			})
			.addCase(createUser.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.isLoading = false
				state.users.push(action.payload)
				state.error = null
			})
			.addCase(createUser.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})

			// Update user
			.addCase(updateUser.pending, state => {
				state.isLoading = true
			})
			.addCase(updateUser.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.isLoading = false
				const index = state.users.findIndex(
					user => user.id === action.payload.id
				)
				if (index !== -1) {
					state.users[index] = action.payload
				}
				state.error = null
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})

			// Delete user
			.addCase(deleteUser.pending, state => {
				state.isLoading = true
			})
			.addCase(
				deleteUser.fulfilled,
				(state, action: PayloadAction<{ id: string }>) => {
					state.isLoading = false
					state.users = state.users.filter(
						user => user.id !== action.payload.id
					)
					state.error = null
				}
			)
			.addCase(deleteUser.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})
	}
})

export default userSlice.reducer
