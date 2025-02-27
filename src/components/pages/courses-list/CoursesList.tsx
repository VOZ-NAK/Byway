import { FC, useEffect } from 'react'

import { fetchCourses, fetchUsers } from '@/store/actions'
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux'

import Layout from '@/components/layout/Layout'
import { Course, Head, Swiper, Typography, User } from '@/components/ui'

import { FilterSidebar } from './components'
import styles from './courses-list.module.scss'

const CoursesList: FC = () => {
	const dispatch = useAppDispatch()

	const { users, error: usersError } = useAppSelector(state => state.user)

	const { courses, error: coursesError } = useAppSelector(state => state.course)

	useEffect(() => {
		dispatch(fetchUsers())
		dispatch(fetchCourses())
	}, [dispatch])

	if (usersError || coursesError) {
		return <div>Ошибка: {usersError || coursesError}</div>
	}

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
						{courses.map(course => (
							<Course key={course.id} {...course} />
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
						items={users}
						renderItem={user => <User key={user.id} {...user} />}
					/>
				</div>
			</section>
		</Layout>
	)
}
export default CoursesList
