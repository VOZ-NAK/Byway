interface ICategory {
	id: string
	label: string
	description: string
	cover?: string
	courses: string[]
	count: number
}

export type { ICategory }
