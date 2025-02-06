interface ICourse {
	id: string
	title: string
	description: string
	cover: string
	price: number
	articles: string[]
	author: string
	reviews: string[]
	category: string
	createdAt: Date
	editedAt: Date
}

export type { ICourse }
