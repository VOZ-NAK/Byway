import { createAsyncThunk } from '@reduxjs/toolkit'

import { clearCurrentUser } from '@/store/slices/userSlice'

import {
	loginWithEmail,
	logout,
	registerWithEmail
} from '@/services/authServices'

export const registerUser = createAsyncThunk(
	'auth/register',
	async (
		{
			email,
			password,
			name
		}: { email: string; password: string; name: string },
		thunkAPI
	) => {
		try {
			const user = await registerWithEmail(email, password, name)

			return {
				uid: user.uid,
				email: user.email,
				displayName: user.displayName
			}
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const loginUser = createAsyncThunk(
	'auth/login',
	async (
		{ email, password }: { email: string; password: string },
		thunkAPI
	) => {
		try {
			return await loginWithEmail(email, password)
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const logoutUser = createAsyncThunk(
	'auth/logout',
	async (_, thunkAPI) => {
		try {
			await logout()
			console.log('logout')

			thunkAPI.dispatch(clearCurrentUser())
			return null
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
