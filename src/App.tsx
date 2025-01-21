import { Home } from './components/screens'
import { DataProvider } from './providers'

function App() {
	return (
		<DataProvider>
			<Home />
		</DataProvider>
	)
}

export default App
