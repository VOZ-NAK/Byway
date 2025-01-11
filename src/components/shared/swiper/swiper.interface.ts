export interface ISwiper<T> {
	items: T[]
	renderItem: (item: T) => React.ReactNode
}
