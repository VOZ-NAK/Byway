import { FC } from 'react'

import { Typography } from '@/components/ui'

import { ICategory } from './category.interface'
import styles from './category.module.scss'

const Category: FC<ICategory> = ({ icon, categoryName, courseCount }) => {
	return (
		<div className={styles.card}>
			<img
				src={icon}
				alt={`${categoryName} icon`}
				className={styles.card__icon}
			/>
			<div className={styles.card__info}>
				<Typography variant='text-large'>{categoryName}</Typography>
				<Typography variant='text-medium'>{courseCount} Courses</Typography>
			</div>
		</div>
	)
}

export default Category

// Category component for displaying a category of courses
//
// Props:
// - icon: URL or path to the category icon image
// - categoryName: the name of the category
// - courseCount: the number of courses in this category
//
// Example usage:
// <Category
//   icon="path/to/icon.svg"
//   categoryName="Astrology"
//   courseCount={11}
// />
