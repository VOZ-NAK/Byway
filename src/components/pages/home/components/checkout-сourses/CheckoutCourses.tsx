import { FC } from 'react'

import { Button, Typography } from '@/components/ui'

import styles from './checkout-courses.module.scss'

const CheckoutCourses: FC = () => {
	return (
		<section className={styles.checkoutCourses}>
			<div className={styles.checkoutCourses__container}>
				<div className={styles.checkoutCourses__left}>
					<div className={styles.checkoutCourses__info}>
						<Typography variant='title-medium'>
							Transform your life through education
						</Typography>
						<Typography variant='text' color='--dark-background'>
							Learners around the world are launching new careers, advancing in
							their fields, and enriching their lives.
						</Typography>
						<Button>Checkout courses</Button>
					</div>
				</div>
				<div className={styles.checkoutCourses__image}></div>
			</div>
		</section>
	)
}

export default CheckoutCourses
