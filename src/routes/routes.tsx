import { createBrowserRouter } from 'react-router-dom'

import {
	CoursesList,
	ErrorPage,
	Home,
	Login,
	Register
} from '../components/screens'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/courses',
		element: <CoursesList />
	},
	{
		path: '/auth/register',
		element: <Register />
	},
	{
		path: '/auth/login',
		element: <Login />
	},
	{
		path: '*',
		element: <ErrorPage />
	}
])

export default router
