import Button from './Button'
import '@/style/index.scss'

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		children: {
			name: 'label'
		}
	}
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
	children: 'Click me'
}
