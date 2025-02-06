import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICategory } from '../../types'
import {
	createCategory,
	deleteCategory,
	fetchCategories,
	updateCategory
} from '../api/categoryActions'

// State interface
interface ICategoryState {
	categories: ICategory[]
	isLoading: boolean
	error: string | null
}

const initialState: ICategoryState = {
	categories: [],
	isLoading: false,
	error: null
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// Fetch categories
			.addCase(fetchCategories.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchCategories.fulfilled,
				(state, action: PayloadAction<ICategory[]>) => {
					state.isLoading = false
					state.categories = action.payload
					state.error = null
				}
			)
			.addCase(fetchCategories.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})

			// Create category
			.addCase(createCategory.pending, state => {
				state.isLoading = true
			})
			.addCase(
				createCategory.fulfilled,
				(state, action: PayloadAction<ICategory>) => {
					state.isLoading = false
					state.categories.push(action.payload)
					state.error = null
				}
			)
			.addCase(createCategory.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})

			// Update category
			.addCase(updateCategory.pending, state => {
				state.isLoading = true
			})
			.addCase(
				updateCategory.fulfilled,
				(state, action: PayloadAction<ICategory>) => {
					state.isLoading = false
					const index = state.categories.findIndex(
						category => category.id === action.payload.id
					)
					if (index !== -1) {
						state.categories[index] = action.payload
					}
					state.error = null
				}
			)
			.addCase(updateCategory.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})

			// Delete category
			.addCase(deleteCategory.pending, state => {
				state.isLoading = true
			})
			.addCase(
				deleteCategory.fulfilled,
				(state, action: PayloadAction<{ id: string }>) => {
					state.isLoading = false
					state.categories = state.categories.filter(
						category => category.id !== action.payload.id
					)
					state.error = null
				}
			)
			.addCase(deleteCategory.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})
	}
})

export default categorySlice.reducer
