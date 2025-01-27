import { MemoryRouter } from 'react-router-dom'

import Footer from './Footer'
import '@/style/index.scss'

export default {
	title: 'Layout/Footer',
	component: Footer
}

const Template = args => (
	<MemoryRouter initialEntries={['/']}>
		<Footer {...args} />
	</MemoryRouter>
)

export const Default = Template.bind({})
