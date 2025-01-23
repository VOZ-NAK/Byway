import { createSlice } from '@reduxjs/toolkit'

import { courses } from '@/data'
import { ICourse } from '@/types'

interface ICoursesState {
	courses: ICourse[]
	isLoading: boolean
	error: string
}

const initialState: ICoursesState = {
	courses: courses,
	isLoading: false,
	error: ''
}

const coursesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {}
})

export default coursesSlice.reducer
