import { combineReducers, configureStore } from '@reduxjs/toolkit'

import {
	categoriesReducer,
	counterReducer,
	coursesReducer,
	usersReducer
} from './reducers'

const rootReducer = combineReducers({
	counter: counterReducer,
	categories: categoriesReducer,
	courses: coursesReducer,
	users: usersReducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
