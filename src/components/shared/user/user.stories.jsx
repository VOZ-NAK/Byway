import User from './User'
import '@/style/index.scss'

export default {
	title: 'Shared/User',
	component: User
}

const Template = args => <User {...args} />

export const Default = Template.bind({})

Default.args = {
	avatar: 'avatar.png',
	name: 'Alice Johnson',
	title: 'Graphic Designer'
}
