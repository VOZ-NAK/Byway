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
import { ICourse } from '../../types'

// Asynchronous action for loading courses
export const fetchCourses = createAsyncThunk<ICourse[], void>(
	'course/fetchAll',
	async (_, thunkAPI) => {
		try {
			const querySnapshot = await getDocs(collection(db, 'courses'))
			const courses = querySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			})) as ICourse[]
			return courses
		} catch (error) {
			return thunkAPI.rejectWithValue('Failed to load courses')
		}
	}
)

// Asynchronous action for creating a new course
export const createCourse = createAsyncThunk<ICourse, Omit<ICourse, 'id'>>(
	'course/createCourse',
	async (course, thunkAPI) => {
		try {
			const docRef = await addDoc(collection(db, 'courses'), course)
			const newCourse = { id: docRef.id, ...course }
			return newCourse
		} catch (error) {
			return thunkAPI.rejectWithValue('Error creating course')
		}
	}
)

// Asynchronous action for updating a course
export const updateCourse = createAsyncThunk<
	ICourse,
	{ id: string; data: Partial<ICourse> }
>('course/updateCourse', async ({ id, data }, thunkAPI) => {
	try {
		const courseRef = doc(db, 'courses', id)
		await updateDoc(courseRef, data)
		return { id, ...data } as ICourse
	} catch (error) {
		return thunkAPI.rejectWithValue('Error updating course')
	}
})

// Asynchronous action for deleting a course
export const deleteCourse = createAsyncThunk<{ id: string }, { id: string }>(
	'course/deleteCourse',
	async ({ id }, thunkAPI) => {
		try {
			const courseRef = doc(db, 'courses', id)
			await deleteDoc(courseRef)
			return { id }
		} catch (error) {
			return thunkAPI.rejectWithValue('Error deleting course')
		}
	}
)
