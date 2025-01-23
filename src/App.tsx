import { Home } from './components/screens'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { DataProvider } from './providers'
import { decrement, increment } from './store/reducers/counterSlice'

function App() {
	// const count = useAppSelector(state => state.counterReducer.value)
	// const dispatch = useAppDispatch()

	return (
		<DataProvider>
			<Home />
		</DataProvider>

		// <div>
		// 	<h1>Счётчик: {count}</h1>
		// 	<button onClick={() => dispatch(increment())}>Увеличить</button>
		// 	<button onClick={() => dispatch(decrement())}>Уменьшить</button>
		// </div>
	)
}

export default App
