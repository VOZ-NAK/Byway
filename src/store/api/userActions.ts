import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	updateDoc
} from 'firebase/firestore'

import { db } from '../../firebase/firebase'
import { IUser } from '../../types'

// Asynchronous action for loading users
export const fetchUsers = createAsyncThunk<IUser[], void>(
	'user/fetchAll',
	async (_, thunkAPI) => {
		try {
			const querySnapshot = await getDocs(collection(db, 'users'))
			const users = querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			})) as IUser[]
			return users
		} catch (error) {
			return thunkAPI.rejectWithValue('Failed to load users')
		}
	}
)

// Asynchronous action for creating a new user
export const createUser = createAsyncThunk<IUser, Omit<IUser, 'id'>>(
	'user/createUser',
	async (user, thunkAPI) => {
		try {
			const docRef = await addDoc(collection(db, 'users'), user)
			const newUser = { id: docRef.id, ...user }
			return newUser
		} catch (error) {
			return thunkAPI.rejectWithValue('Error creating user')
		}
	}
)

// Asynchronous action for updating a user
export const updateUser = createAsyncThunk<
	IUser,
	{ id: string; data: Partial<IUser> }
>('user/updateUser', async ({ id, data }, thunkAPI) => {
	try {
		const userRef = doc(db, 'users', id)
		await updateDoc(userRef, data)
		return { id, ...data } as IUser
	} catch (error) {
		return thunkAPI.rejectWithValue('Error updating user')
	}
})

// Asynchronous action for deleting a user
export const deleteUser = createAsyncThunk<{ id: string }, { id: string }>(
	'user/deleteUser',
	async ({ id }, thunkAPI) => {
		try {
			const userRef = doc(db, 'users', id)
			await deleteDoc(userRef)
			return { id }
		} catch (error) {
			return thunkAPI.rejectWithValue('Error deleting user')
		}
	}
)
