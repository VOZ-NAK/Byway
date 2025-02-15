import {
	User,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth'

import { createUser, setCurrentUser } from '@/store/actions/userActions'
import { store } from '@/store/store'

import { auth } from '@/firebase/firebase'

export const registerWithEmail = async (
	email: string,
	password: string,
	name: string
): Promise<User> => {
	const userCredential = await createUserWithEmailAndPassword(
		auth,
		email,
		password
	)
	const user = userCredential.user

	const userData = {
		id: user.uid,
		email,
		name,
		cover: '',
		createdAt: new Date().toISOString(),
		headline: '',
		description: '',
		socials: [],
		courses: [],
		reviews: [],
		purchases: []
	}

	await store.dispatch(createUser(userData))

	store.dispatch(setCurrentUser(user.uid))

	return user
}

export const loginWithEmail = async (
	email: string,
	password: string
): Promise<User> => {
	const userCredential = await signInWithEmailAndPassword(auth, email, password)
	const user = userCredential.user

	store.dispatch(setCurrentUser(user.uid))

	return user
}

export const logout = async (): Promise<void> => {
	await signOut(auth)
}
