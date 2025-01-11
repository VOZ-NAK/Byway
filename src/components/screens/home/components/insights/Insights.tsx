import { FC } from 'react'

import styles from './insights.module.scss'

const Insights: FC = () => {
	return (
		<section className={styles.insights}>
			<div className={styles.insights__container}>
				<div className={styles.insights__item}>
					<div className={styles.insights__value}>250+</div>
					<div className={styles.insights__title}>
						Courses by our best mentors
					</div>
				</div>
				<div className={styles.insights__item}>
					<div className={styles.insights__value}>100+</div>
					<div className={styles.insights__title}>Experienced mentors</div>
				</div>
				<div className={styles.insights__item}>
					<div className={styles.insights__value}>2000+</div>
					<div className={styles.insights__title}>
						Users learning something new
					</div>
				</div>
			</div>
		</section>
	)
}

export default Insights
