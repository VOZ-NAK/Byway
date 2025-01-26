import { createBrowserRouter } from 'react-router-dom'

import { CoursesList, ErrorPage, Home } from '../components/screens'

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
		path: '*',
		element: <ErrorPage />
	}
])

export default router
