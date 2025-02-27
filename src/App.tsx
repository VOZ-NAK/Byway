import { BrowserRouter } from 'react-router-dom'

import Navigation from './navigation/Navigation'

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Navigation />
			</div>
		</BrowserRouter>
	)
}

export default App
