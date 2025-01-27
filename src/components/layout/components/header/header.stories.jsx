import { MemoryRouter } from 'react-router-dom'

import Header from './Header'
import '@/style/index.scss'

export default {
	title: 'Layout/Header',
	component: Header
}

const Template = args => (
	<MemoryRouter initialEntries={['/']}>
		<Header {...args} />
	</MemoryRouter>
)

export const Default = Template.bind({})
