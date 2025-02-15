import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	updateDoc
} from 'firebase/firestore'

import { db } from '@/firebase/firebase'
import { ICourse } from '@/types'

// Get all courses
export const getCourses = async (): Promise<ICourse[]> => {
	const querySnapshot = await getDocs(collection(db, 'courses'))
	return querySnapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data()
	})) as ICourse[]
}

// Create a new course
export const addCourse = async (
	course: Omit<ICourse, 'id'>
): Promise<ICourse> => {
	const docRef = await addDoc(collection(db, 'courses'), course)
	return { id: docRef.id, ...course }
}

// Update an existing course
export const editCourse = async (
	id: string,
	data: Partial<ICourse>
): Promise<ICourse> => {
	const courseRef = doc(db, 'courses', id)
	await updateDoc(courseRef, data)
	return { id, ...data } as ICourse
}

// Delete a course
export const removeCourse = async (id: string): Promise<string> => {
	await deleteDoc(doc(db, 'courses', id))
	return id
}
