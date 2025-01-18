import Course from './Course'
import '@/style/index.scss'

export default {
	title: 'Shared/Course',
	component: Course
}

const Template = args => <Course {...args} />

export const Default = Template.bind({})

Default.args = {
	cover: 'cover.svg',
	courseName: 'Beginner’s Guide to Design',
	author: 'By Ronald Richards',
	price: 149.9
}
