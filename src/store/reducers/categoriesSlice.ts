import { createSlice } from '@reduxjs/toolkit'

import { categories } from '@/data'
import { ICategory } from '@/types'

interface ICategoriesState {
	categories: ICategory[]
	isLoading: boolean
	error: string
}

const initialState: ICategoriesState = {
	categories: categories,
	isLoading: false,
	error: ''
}

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {}
})

export default categoriesSlice.reducer
