interface ILink {
	text: string
	href: string
}

interface IFooterSection {
	title: string
	links: ILink[]
}

const footerLinks: IFooterSection[] = [
	{
		title: 'Get Help',
		links: [
			{ text: 'Contact Us', href: '#' },
			{ text: 'Latest Articles', href: '#' },
			{ text: 'FAQ', href: '#' }
		]
	},
	{
		title: 'Programs',
		links: [
			{ text: 'Art & Design', href: '#' },
			{ text: 'Business', href: '#' },
			{ text: 'IT & Software', href: '#' },
			{ text: 'Languages', href: '#' },
			{ text: 'Programming', href: '#' }
		]
	},
	{
		title: 'Contact Us',
		links: [
			{
				text: 'Address: Saint-Petersburg, Kronverkskaya st., building 7',
				href: '#'
			},
			{ text: 'Tel: 8(800) 555-35-35', href: '#' },
			{ text: 'Mail: bywayedu@webkul.in', href: '#' }
		]
	}
]
export default footerLinks
