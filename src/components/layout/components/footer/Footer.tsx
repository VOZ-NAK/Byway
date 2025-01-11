import { FC } from 'react'

import { Typography } from '@/components/ui'

import styles from './footer.module.scss'
import { footerLinks } from '@/data'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__description}>
					<div className={styles.footer__description_logo}>
						<a
							href='#'
							className={`${styles.footer__description_logo_image} _icon-byway`}
						></a>
						<Typography
							variant='title-large'
							color='--semi-transparent-light-gray-2'
						>
							Byway
						</Typography>
					</div>
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
				{footerLinks.map((section, index: number) => (
					<div className={styles.footer__infoColumn} key={index}>
						<Typography variant='title-small'>{section.title}</Typography>
						<ul>
							{section.links.map((link, linkIndex: number) => (
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
