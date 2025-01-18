import Footer from './Footer'
import '@/style/index.scss'

export default {
	title: 'Layout/Footer',
	component: Footer
}

const Template = args => <Footer {...args} />

export const Default = Template.bind({})

// Default.args = {
// 	icon: 'circle.svg',
// 	categoryName: 'Astrology',
// 	courseCount: 11
// }
