import Profile from '@/components/pages/profile/UserProfile'

import {
	CoursesList,
	ErrorPage,
	Home,
	Login,
	Register
} from '../components/pages'

export const routes = [
	{
		path: '/',
		element: Home,
		isAuth: false
	},
	{
		path: '/courses',
		element: CoursesList,
		isAuth: false
	},
	{
		path: '/auth/register',
		element: Register,
		isAuth: false
	},
	{
		path: '/auth/login',
		element: Login,
		isAuth: false
	},
	{
		path: '/profile',
		element: Profile,
		isAuth: true
	},
	{
		path: '/not-found',
		element: ErrorPage,
		isAuth: false
	}
]
