interface IUser {
	id: string
	email: string
	name: string
	cover: string
	headline: string
	description: string
	socials: {
		twitter: string
		instagram: string
		byway: string
	}
	courses: string[]
	reviews: string[]
	purchases: string[]
	createdAt: string
}
export type { IUser }
