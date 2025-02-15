import { createBrowserRouter } from 'react-router-dom'

import Profile from '@/components/screens/profile/UserProfile'

import {
	CoursesList,
	ErrorPage,
	Home,
	Login,
	Register
} from '../components/screens'

export const routes = [
	{
		path: '/',
		element: Home
	},
	{
		path: '/courses',
		element: CoursesList
	},
	{
		path: '/auth/register',
		element: Register
	},
	{
		path: '/auth/login',
		element: Login
	},
	{
		path: '/profile',
		element: Profile
	},
	{
		path: '/not-found',
		element: ErrorPage
	}
]
