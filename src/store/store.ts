import { combineReducers, configureStore } from '@reduxjs/toolkit'

import {
	categoryReducer,
	counterReducer,
	courseReducer,
	userReducer
} from './slices'

const rootReducer = combineReducers({
	counter: counterReducer,
	category: categoryReducer,
	course: courseReducer,
	user: userReducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
