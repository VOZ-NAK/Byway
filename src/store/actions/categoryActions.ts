import { createAsyncThunk } from '@reduxjs/toolkit'

import {
	addCategory,
	editCategory,
	getCategories,
	removeCategory
} from '../../services/categoryService'
import { ICategory } from '../../types'

export const fetchCategories = createAsyncThunk<ICategory[], void>(
	'category/fetchAll',
	async (_, thunkAPI) => {
		try {
			const categories = await getCategories()
			return categories
		} catch (error) {
			return thunkAPI.rejectWithValue('Failed to load categories')
		}
	}
)

export const createCategory = createAsyncThunk<
	ICategory,
	Omit<ICategory, 'id'>
>('category/createCategory', async (category, thunkAPI) => {
	try {
		const newCategory = await addCategory(category)
		return newCategory
	} catch (error) {
		return thunkAPI.rejectWithValue('Error creating category')
	}
})

export const updateCategory = createAsyncThunk<
	ICategory,
	{ id: string; data: Partial<ICategory> }
>('category/updateCategory', async ({ id, data }, thunkAPI) => {
	try {
		const updatedCategory = await editCategory(id, data)
		return updatedCategory
	} catch (error) {
		return thunkAPI.rejectWithValue('Error updating category')
	}
})

export const deleteCategory = createAsyncThunk<{ id: string }, { id: string }>(
	'category/deleteCategory',
	async ({ id }, thunkAPI) => {
		try {
			const deletedCategoryId = await removeCategory(id)
			return { id: deletedCategoryId }
		} catch (error) {
			return thunkAPI.rejectWithValue('Error deleting category')
		}
	}
)
