import { FC, PropsWithChildren, createContext, useContext } from 'react'

import { categories, courses, users } from '@/data'
import { ICategory, ICourse, IUser } from '@/types'

interface IDataContext {
	categories: ICategory[]
	courses: ICourse[]
	users: IUser[]
}

const DataContext = createContext<IDataContext>({
	categories: categories,
	courses: courses,
	users: users
})

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<DataContext.Provider value={{ categories, courses, users }}>
			{children}
		</DataContext.Provider>
	)
}

export const useData = () => useContext(DataContext)
