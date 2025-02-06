import Category from './Category'
import '@/style/index.scss'

export default {
	title: 'Shared/Category',
	component: Category
}

const Template = args => <Category {...args} />

export const Default = Template.bind({})

Default.args = {
	cover: 'circle.svg',
	label: 'Astrology',
	count: 11
}
