interface ICategory {
	categoryName: string
	icon: string
	courseCount: number
}

const categories: ICategory[] = [
	{
		icon: 'circle.svg',
		categoryName: 'Astrology',
		courseCount: 11
	},
	{
		icon: 'circle.svg',
		categoryName: 'Development',
		courseCount: 12
	},
	{
		icon: 'circle.svg',
		categoryName: 'Marketing',
		courseCount: 12
	},
	{
		icon: 'circle.svg',
		categoryName: 'Physics',
		courseCount: 14
	}
]

export default categories
