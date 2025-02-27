import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/store/store'

import Header from './Header'
import '@/style/index.scss'

export default {
	title: 'Layout/Header',
	component: Header,
	decorators: [
		Story => (
			<BrowserRouter>
				<Provider store={store}>
					<Story />
				</Provider>
			</BrowserRouter>
		)
	]
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})
