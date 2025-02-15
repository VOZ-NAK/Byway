import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	setDoc,
	updateDoc
} from 'firebase/firestore'

import { db } from '@/firebase/firebase'
import { IUser } from '@/types'

export const getUsers = async (): Promise<IUser[]> => {
	const querySnapshot = await getDocs(collection(db, 'users'))
	return querySnapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data()
	})) as IUser[]
}

export const addUser = async (user: IUser): Promise<IUser> => {
	await setDoc(doc(db, 'users', user.id), user)
	return { id: user.id, ...user }
}

export const editUser = async (
	id: string,
	data: Partial<IUser>
): Promise<IUser> => {
	const userRef = doc(db, 'users', id)
	await updateDoc(userRef, data)
	return { id, ...data } as IUser
}

export const removeUser = async (id: string): Promise<string> => {
	await deleteDoc(doc(db, 'users', id))
	return id
}

export const getUserById = async (userId: string): Promise<IUser | null> => {
	const userDocRef = doc(db, 'users', userId)
	const userDoc = await getDoc(userDocRef)

	if (userDoc.exists()) {
		return userDoc.data() as IUser
	} else {
		return null
	}
}
