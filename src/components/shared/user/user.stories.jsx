import User from './User'
import '@/style/index.scss'

export default {
	title: 'Shared/User',
	component: User
}

const Template = args => <User {...args} />

export const Default = Template.bind({})

Default.args = {
	cover: 'avatar.png',
	name: 'Alice Johnson',
	headline: 'Graphic Designer'
}
