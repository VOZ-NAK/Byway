import AuthButton from './AuthButton'
import '@/style/index.scss'

export default {
	title: 'UI/AuthButton',
	component: AuthButton,
	argTypes: {
		children: {
			name: 'label'
		},
		bgColor: { name: 'Color' }
	}
}

const Template = args => <AuthButton {...args} />

export const Default = Template.bind({})

Default.args = {
	children: 'Click me',
	bgColor: '--light-teal'
}
