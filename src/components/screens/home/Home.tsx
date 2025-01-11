import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { Course, Head, Swiper, User } from '@/components/shared'

import {
	Category,
	CheckoutCourses,
	Insights,
	InstructorJourney,
	Preview
} from './components'
import styles from './home.module.scss'
import { categories, courses, users } from '@/data'

const Home: FC = () => {
	return (
		<>
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
								<Category
									key={category.categoryName}
									icon={category.icon}
									categoryName={category.categoryName}
									courseCount={category.courseCount}
								/>
							)}
						/>
					</div>
				</section>
				<section className={styles.courses}>
					<div className={styles.courses__container}>
						<Head
							title='Top Courses'
							buttonText='See all'
							onClick={() => {}}
						></Head>
						<Swiper
							items={courses}
							renderItem={course => (
								<Course
									key={course.price}
									cover={course.cover}
									courseName={course.courseName}
									author={course.author}
									price={course.price}
								/>
							)}
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
							renderItem={user => (
								<User
									key={user.name}
									avatar={user.avatar}
									name={user.name}
									title={user.title}
								/>
							)}
						/>
					</div>
				</section>
				<InstructorJourney />
				<CheckoutCourses />
			</Layout>
		</>
	)
}

export default Home
