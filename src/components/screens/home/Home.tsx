import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchCategories, fetchCourses, fetchUsers } from '@/store/api'

import Layout from '@/components/layout/Layout'
import { Course, Head, Swiper, User } from '@/components/shared'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'

import {
	Category,
	CheckoutCourses,
	Insights,
	InstructorJourney,
	Preview
} from './components'
import styles from './home.module.scss'

const Home: FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const {
		categories,
		isLoading: categoriesLoading,
		error: categoriesError
	} = useAppSelector(state => state.category)

	const {
		users,
		isLoading: usersLoading,
		error: usersError
	} = useAppSelector(state => state.user)

	const {
		courses,
		isLoading: coursesLoading,
		error: coursesError
	} = useAppSelector(state => state.course)

	useEffect(() => {
		dispatch(fetchUsers())
		dispatch(fetchCourses())
		dispatch(fetchCategories())
	}, [dispatch])

	if (usersError || coursesError) {
		return <div>Ошибка: {usersError || coursesError}</div>
	}

	return (
		<Layout>
			<Preview />
			<Insights />
			<section className={styles.categories}>
				<div className={styles.categories__container}>
					<Head
						title='Top Categories'
						buttonText='See all'
						onClick={() => {}}
					/>
					<Swiper
						items={categories}
						renderItem={category => (
							<Category key={category.id} {...category} />
						)}
					/>
				</div>
			</section>
			<section className={styles.courses}>
				<div className={styles.courses__container}>
					<Head
						title='Top Courses'
						buttonText='See all'
						onClick={() => navigate('/courses')}
					></Head>
					<Swiper
						items={courses}
						renderItem={course => <Course key={course.id} {...course} />}
					/>
				</div>
			</section>
			<section className={styles.instructors}>
				<div className={styles.instructors__container}>
					<Head
						title='Top Instructors'
						buttonText='See all'
						onClick={() => {}}
					></Head>
					<Swiper
						items={users}
						renderItem={user => <User key={user.id} {...user} />}
					/>
				</div>
			</section>
			<InstructorJourney />
			<CheckoutCourses />
		</Layout>
	)
}

export default Home
