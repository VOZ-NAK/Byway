import {
	User,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth'

import { createUser, setCurrentUser } from '@/store/actions/userActions'
import { store } from '@/store/store'

import { auth } from '@/firebase/firebase'

const createUserData = (user: User, email: string, name: string) => ({
	id: user.uid,
	email,
	name,
	cover: '',
	createdAt: new Date().toISOString(),
	headline: '',
	description: '',
	socials: {
		twitter: '',
		instagram: '',
		byway: ''
	},
	courses: [],
	reviews: [],
	purchases: []
})

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

	const userData = createUserData(user, email, name)

	await store.dispatch(createUser(userData))

	store.dispatch(setCurrentUser(user.uid))

	localStorage.setItem('currentUser', JSON.stringify(userData))

	return user
}

export const loginWithEmail = async (
	email: string,
	password: string
): Promise<User> => {
	const userCredential = await signInWithEmailAndPassword(auth, email, password)
	const user = userCredential.user

	store.dispatch(setCurrentUser(user.uid))

	const userData = createUserData(user, email, user.displayName || email)

	localStorage.setItem('currentUser', JSON.stringify(userData))

	return user
}

export const logout = async (): Promise<void> => {
	await signOut(auth)

	localStorage.removeItem('currentUser')
}
