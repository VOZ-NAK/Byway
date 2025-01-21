import cn from 'clsx'
import { FC } from 'react'

import { Typography } from '@/components/ui'

import { menu } from './footer.data'
import styles from './footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__description}>
					<a href='/' className={styles.footer__description_logo}>
						<span
							className={cn(
								styles.footer__description_logo_image,
								'_icon-byway'
							)}
						/>
						<Typography
							variant='title-large'
							color='--semi-transparent-light-gray-2'
						>
							Byway
						</Typography>
					</a>
					<Typography
						variant='text-small'
						color='--semi-transparent-light-gray-2'
					>
						Empowering learners through accessible and engaging online
						education. Byway is an online learning platform dedicated to
						providing high-quality, flexible, and affordable educational
						experiences.
					</Typography>
				</div>
				{menu.map((section, index) => (
					<div className={styles.footer__infoColumn} key={index}>
						<Typography variant='title-small'>{section.title}</Typography>
						<ul>
							{section.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<Typography
										variant='text-small'
										color='--semi-transparent-light-gray-2'
									>
										<a href={link.href}>{link.text}</a>
									</Typography>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	)
}
export default Footer
