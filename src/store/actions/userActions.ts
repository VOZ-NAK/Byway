import { createAsyncThunk } from '@reduxjs/toolkit'

import {
	addUser,
	editUser,
	getUserById,
	getUsers,
	removeUser
} from '@/services/userService'

import { IUser } from '@/types'

export const fetchUsers = createAsyncThunk<IUser[], void>(
	'user/fetchUsers',
	async (_, thunkAPI) => {
		try {
			return await getUsers()
		} catch (error) {
			return thunkAPI.rejectWithValue('Error loading users')
		}
	}
)

export const createUser = createAsyncThunk<IUser, IUser>(
	'user/createUser',
	async (user, thunkAPI) => {
		try {
			return await addUser(user)
		} catch (error) {
			return thunkAPI.rejectWithValue('Error creating user')
		}
	}
)

export const updateUser = createAsyncThunk<
	IUser,
	{ id: string; data: Partial<IUser> }
>('user/updateUser', async ({ id, data }, thunkAPI) => {
	try {
		const updatedUser = await editUser(id, data)
		localStorage.setItem('currentUser', JSON.stringify(updatedUser))

		return updatedUser
	} catch (error) {
		return thunkAPI.rejectWithValue('Error updating user')
	}
})

export const deleteUser = createAsyncThunk<{ id: string }, { id: string }>(
	'user/deleteUser',
	async ({ id }, thunkAPI) => {
		try {
			await removeUser(id)
			return { id }
		} catch (error) {
			return thunkAPI.rejectWithValue('Error deleting user')
		}
	}
)

export const setCurrentUser = createAsyncThunk<IUser | null, string>(
	'user/setCurrentUser',
	async (userId: string, { rejectWithValue }) => {
		try {
			return await getUserById(userId)
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
