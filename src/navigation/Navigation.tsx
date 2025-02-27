import { Navigate, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

const Navigation = () => {
	const currentUser = localStorage.getItem('currentUser')

	return (
		<Routes>
			{routes.map(({ path, element: Component, isAuth }) => (
				<Route
					key={path}
					path={path}
					element={
						isAuth && !currentUser ? (
							<Navigate to='/auth/login' replace />
						) : (
							<Component />
						)
					}
				/>
			))}
			<Route path='*' element={<Navigate to='/not-found' />} />
		</Routes>
	)
}

export default Navigation
