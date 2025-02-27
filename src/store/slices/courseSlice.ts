import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICourse } from '../../types'
import {
	createCourse,
	deleteCourse,
	fetchCourses,
	updateCourse
} from '../actions/courseActions'

interface ICourseState {
	courses: ICourse[]
	isLoading: boolean
	error: string | null
}

const initialState: ICourseState = {
	courses: [],
	isLoading: false,
	error: null
}

const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder

			.addCase(fetchCourses.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchCourses.fulfilled,
				(state, action: PayloadAction<ICourse[]>) => {
					state.isLoading = false
					state.courses = action.payload
					state.error = null
				}
			)
			.addCase(fetchCourses.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})

		builder
			.addCase(createCourse.pending, state => {
				state.isLoading = true
			})
			.addCase(
				createCourse.fulfilled,
				(state, action: PayloadAction<ICourse>) => {
					state.isLoading = false
					state.courses.push(action.payload)
					state.error = null
				}
			)
			.addCase(createCourse.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})

		builder
			.addCase(updateCourse.pending, state => {
				state.isLoading = true
			})
			.addCase(
				updateCourse.fulfilled,
				(state, action: PayloadAction<ICourse>) => {
					state.isLoading = false
					const index = state.courses.findIndex(
						course => course.id === action.payload.id
					)
					if (index !== -1) {
						state.courses[index] = action.payload
					}
					state.error = null
				}
			)
			.addCase(updateCourse.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})

		builder
			.addCase(deleteCourse.pending, state => {
				state.isLoading = true
			})
			.addCase(
				deleteCourse.fulfilled,
				(state, action: PayloadAction<{ id: string }>) => {
					state.isLoading = false
					state.courses = state.courses.filter(
						course => course.id !== action.payload.id
					)
					state.error = null
				}
			)
			.addCase(deleteCourse.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload as string
			})
	}
})

export default courseSlice.reducer
