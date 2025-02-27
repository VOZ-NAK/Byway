import { Provider } from 'react-redux'

import { store } from '@/store/store'

import User from './User'
import '@/style/index.scss'

export default {
	title: 'UI/User',
	component: User
}

const Template = args => (
	<Provider store={store}>
		<User {...args} />
	</Provider>
)

export const Default = Template.bind({})

Default.args = {
	id: '2',
	email: 'email',
	name: 'David Brown',
	cover:
		'https://avatars.mds.yandex.net/i?id=a72040ceefc9e1b3ff7ca51389614cd769bc4efd-6003430-images-thumbs&n=13',
	headline: 'Teacher',
	description: 'description',
	socials: {
		twitter: '',
		instagram: '',
		byway: ''
	},
	courses: [],
	reviews: [''],
	purchases: [''],
	createdAt: ''
}
