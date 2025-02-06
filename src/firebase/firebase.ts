import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCFE4CMy0JfDDp5IjV7GdzwAxDvQdyrTiQ',
	authDomain: 'byway-3c38e.firebaseapp.com',
	projectId: 'byway-3c38e',
	storageBucket: 'byway-3c38e.firebasestorage.app',
	messagingSenderId: '138507096681',
	appId: '1:138507096681:web:66dee92ffdfa91165f48f8'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
