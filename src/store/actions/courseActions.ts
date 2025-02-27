import { createAsyncThunk } from '@reduxjs/toolkit'

import {
	addCourse,
	editCourse,
	getCourses,
	removeCourse
} from '../../services/courseService'
import { ICourse } from '../../types'

export const fetchCourses = createAsyncThunk<ICourse[], void>(
	'course/fetchAll',
	async (_, thunkAPI) => {
		try {
			const courses = await getCourses()
			return courses
		} catch (error) {
			return thunkAPI.rejectWithValue('Failed to load courses')
		}
	}
)

export const createCourse = createAsyncThunk<ICourse, Omit<ICourse, 'id'>>(
	'course/createCourse',
	async (course, thunkAPI) => {
		try {
			const newCourse = await addCourse(course)
			return newCourse
		} catch (error) {
			return thunkAPI.rejectWithValue('Error creating course')
		}
	}
)

export const updateCourse = createAsyncThunk<
	ICourse,
	{ id: string; data: Partial<ICourse> }
>('course/updateCourse', async ({ id, data }, thunkAPI) => {
	try {
		const updatedCourse = await editCourse(id, data)
		return updatedCourse
	} catch (error) {
		return thunkAPI.rejectWithValue('Error updating course')
	}
})

export const deleteCourse = createAsyncThunk<{ id: string }, { id: string }>(
	'course/deleteCourse',
	async ({ id }, thunkAPI) => {
		try {
			const deletedCourseId = await removeCourse(id)
			return { id: deletedCourseId }
		} catch (error) {
			return thunkAPI.rejectWithValue('Error deleting course')
		}
	}
)
