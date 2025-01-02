import { FC } from 'react'

import { Typography } from '@/components/ui'

import styles from './Category.module.scss'

interface ICategory {
	icon: string
	categoryName: string
	courseCount: number
}

const Category: FC<ICategory> = ({ icon, categoryName, courseCount }) => {
	return (
		<div className={styles.card}>
			<img src='circle.svg' alt='circle' className={styles.card__icon} />
			<div className={styles.card__info}>
				<Typography variant='text-large'>Astrology</Typography>
				<p className={styles.card__count}>11 Courses</p>
			</div>
		</div>
	)
}

export default Category
