import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	updateDoc
} from 'firebase/firestore'

import { db } from '@/firebase/firebase'
import { ICategory } from '@/types'

// Fetch all categories
export const getCategories = async (): Promise<ICategory[]> => {
	const querySnapshot = await getDocs(collection(db, 'categories'))
	return querySnapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data()
	})) as ICategory[]
}

// Add a new category
export const addCategory = async (
	category: Omit<ICategory, 'id'>
): Promise<ICategory> => {
	const docRef = await addDoc(collection(db, 'categories'), category)
	return { id: docRef.id, ...category }
}

// Update an existing category
export const editCategory = async (
	id: string,
	data: Partial<ICategory>
): Promise<ICategory> => {
	const categoryRef = doc(db, 'categories', id)
	await updateDoc(categoryRef, data)
	return { id, ...data } as ICategory
}

// Delete a category
export const removeCategory = async (id: string): Promise<string> => {
	await deleteDoc(doc(db, 'categories', id))
	return id
}
