import { FC } from 'react'

import { Typography } from '@/components/ui'

import styles from './course.module.scss'
import { ICourse } from '@/types/courseTypes'

const Course: FC<ICourse> = ({ title, author, cover, price }) => {
	return (
		<div className={styles.course}>
			<div className={styles.course__cover}>
				<img src={cover} alt={`${title} icon`} />
			</div>
			<div className={styles.course__info}>
				<Typography variant='text-large' color='--dark-blue'>
					{title}
				</Typography>
				<Typography variant='text-medium'>{author}</Typography>
				<Typography variant='text-medium' color='--dark-blue'>
					${price}
				</Typography>
			</div>
		</div>
	)
}

export default Course

// Course component for displaying course information
//
// Props:
// - courseName: the name of the course
// - author: the name of the course author
// - cover: URL or path to the course cover image
// - price: the price of the course
//
// Example usage:
// <Course
//   courseName="Beginner’s Guide to Design"
//   author="Ronald Richards"
//   cover="path/to/cover.svg"
//   price={149.9}
// />
