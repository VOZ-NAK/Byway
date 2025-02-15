import { Navigate, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

const Navigation = () => {
	return (
		<Routes>
			{routes.map(({ path, element: Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate to='/not-found' />} />
		</Routes>
	)
}

export default Navigation
