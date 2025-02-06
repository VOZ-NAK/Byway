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
import { ICategory } from '../../types'

// Asynchronous action for loading categories
export const fetchCategories = createAsyncThunk<ICategory[], void>(
	'category/fetchAll',
	async (_, thunkAPI) => {
		try {
			const querySnapshot = await getDocs(collection(db, 'categories'))
			const categories = querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			})) as ICategory[]
			return categories
		} catch (error) {
			return thunkAPI.rejectWithValue('Failed to load categories')
		}
	}
)

// Asynchronous action for creating a new category
export const createCategory = createAsyncThunk<
	ICategory,
	Omit<ICategory, 'id'>
>('category/createCategory', async (category, thunkAPI) => {
	try {
		const docRef = await addDoc(collection(db, 'categories'), category)
		const newCategory = { id: docRef.id, ...category }
		return newCategory
	} catch (error) {
		return thunkAPI.rejectWithValue('Error creating category')
	}
})

// Asynchronous action for updating a category
export const updateCategory = createAsyncThunk<
	ICategory,
	{ id: string; data: Partial<ICategory> }
>('category/updateCategory', async ({ id, data }, thunkAPI) => {
	try {
		const categoryRef = doc(db, 'categories', id)
		await updateDoc(categoryRef, data)
		return { id, ...data } as ICategory
	} catch (error) {
		return thunkAPI.rejectWithValue('Error updating category')
	}
})

// Asynchronous action for deleting a category
export const deleteCategory = createAsyncThunk<{ id: string }, { id: string }>(
	'category/deleteCategory',
	async ({ id }, thunkAPI) => {
		try {
			const categoryRef = doc(db, 'categories', id)
			await deleteDoc(categoryRef)
			return { id }
		} catch (error) {
			return thunkAPI.rejectWithValue('Error deleting category')
		}
	}
)
