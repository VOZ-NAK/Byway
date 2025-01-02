import { FC } from 'react'

import { Typography } from '@/components/ui'

import styles from './Course.module.scss'

interface ICourse {
	courseName: string
	author: string
	cover: string
	price: number
}

const Course: FC<ICourse> = ({ courseName, author, cover, price }) => {
	return (
		<div className={styles.course}>
			<img src='cover.svg' alt='cover' className={styles.course__cover} />
			<div className={styles.course__info}>
				<Typography variant='text-large' color='--light-blue'>
					Beginner’s Guide to Design
				</Typography>
				<Typography variant='text-medium'>By Ronald Richards</Typography>
				<Typography variant='text-medium' color='--light-blue'>
					$149.9
				</Typography>
			</div>
		</div>
	)
}

export default Course
