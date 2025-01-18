import Header from './Header'
import '@/style/index.scss'

export default {
	title: 'Layout/Header',
	component: Header
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})

// Default.args = {
// 	icon: 'circle.svg',
// 	categoryName: 'Astrology',
// 	courseCount: 11
// }
