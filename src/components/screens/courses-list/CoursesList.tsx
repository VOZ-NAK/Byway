import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { Course, Head, Swiper, User } from '@/components/shared'
import { Typography } from '@/components/ui'

import { useAppSelector } from '@/hooks/redux'

import { FilterSidebar } from './components'
import styles from './courses-list.module.scss'

const CoursesList: FC = () => {
	const users = useAppSelector(state => state.users)
	const courses = useAppSelector(state => state.courses)

	return (
		<Layout>
			<section className={styles.title}>
				<div className={styles.title__container}>
					<Typography variant='title-large'>All courses</Typography>
				</div>
			</section>
			<section className={styles.body}>
				<div className={styles.body__container}>
					<FilterSidebar />
					<div className={styles.coursesList}>
						{courses.courses.map((course, index) => (
							<Course key={index} {...course} />
						))}
					</div>
				</div>
			</section>
			<section className={styles.mentors}>
				<div className={styles.mentors__container}>
					<Head
						title='Popular Mentors'
						buttonText='See all'
						onClick={() => {}}
					></Head>
					<Swiper
						items={users.users}
						renderItem={user => <User key={user.name} {...user} />}
					/>
				</div>
			</section>
		</Layout>
	)
}
export default CoursesList
