import { FC } from 'react'

import { Typography } from '@/components/ui'

import styles from './category.module.scss'
import { ICategory } from '@/types'

const Category: FC<ICategory> = ({ cover, label, count }) => {
	return (
		<div className={styles.card}>
			<img src={cover} alt={`${label} icon`} className={styles.card__icon} />
			<div className={styles.card__info}>
				<Typography variant='text-large'>{label}</Typography>
				<Typography variant='text-medium'>{count} Courses</Typography>
			</div>
		</div>
	)
}

export default Category
