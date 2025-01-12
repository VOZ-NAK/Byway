import Typography from './Typography'
import '@/style/index.scss'

export default {
	title: 'UI/Typography',
	component: Typography,
	argTypes: {
		children: {
			name: 'label'
		}
	}
}

const Template = args => <Typography {...args} />

export const Default = Template.bind({})

Default.args = {
	children: 'Click me',
	variant: 'text'
}
