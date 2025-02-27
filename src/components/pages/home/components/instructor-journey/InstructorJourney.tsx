import { FC } from 'react'

import { Button, Typography } from '@/components/ui'

import styles from './instructor-journey.module.scss'

const InstructorJourney: FC = () => {
	return (
		<section className={styles.instructorJourney}>
			<div className={styles.instructorJourney__container}>
				<div className={styles.instructorJourney__image}></div>
				<div className={styles.instructorJourney__right}>
					<div className={styles.instructorJourney__info}>
						<Typography variant='title-medium'>Become an Instructor</Typography>
						<Typography variant='text' color='--dark-background'>
							Instructors from around the world teach millions of students on
							Byway. We provide the tools and skills to teach what you love.
						</Typography>
						<Button>Start your instructor journey</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default InstructorJourney
