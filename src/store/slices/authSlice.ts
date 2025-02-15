import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { registerWithEmail } from '@/services/authServices'

// import { registerUser } from '@/store/actions'

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
			console.log(' registerUser в AuthState')
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

interface AuthState {
	user: {
		uid: string | null
		email: string | null
		displayName: string | null
	} | null
	isLoading: boolean
	error: string | null
}

const initialState: AuthState = {
	user: null,
	isLoading: false,
	error: null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder

			.addCase(registerUser.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})
	}
})

export default authSlice.reducer
