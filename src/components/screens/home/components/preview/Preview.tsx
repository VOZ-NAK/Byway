import { FC } from 'react'

import { Button, Typography } from '@/components/ui'

import styles from './preview.module.scss'

const Preview: FC = () => {
	return (
		<section className={styles.preview}>
			<div className={styles.preview__container}>
				<div className={styles.preview__left}>
					<div className={styles.preview__info}>
						<Typography variant='title-large'>
							Unlock Your Potential with <br />
							Byway
						</Typography>
						<Typography variant='text'>
							Welcome to Byway, where learning knows no bounds. We believe that
							education is the key to personal and professional growth, and
							we're here to guide you on your journey to success.
						</Typography>

						<Button>Start your instructor journey</Button>
					</div>
				</div>
				<div className={styles.preview__image}></div>
			</div>
		</section>
	)
}
export default Preview
