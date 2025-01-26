import cn from 'clsx'
import { FC, PropsWithChildren, useState } from 'react'

import Typography from '../typography/Typography'

import styles from './Spoiler.module.scss'

interface ISpoiler {
	title: string
}

const Spoiler: FC<PropsWithChildren<ISpoiler>> = ({ title, children }) => {
	const [isActive, setIsActive] = useState(false)

	const toggleSpoiler = () => {
		setIsActive(!isActive)
	}

	return (
		<div className={styles.spollers}>
			<button
				className={cn(styles.title, '_icon-down-chevron', {
					[styles.active]: isActive
				})}
				onClick={toggleSpoiler}
			>
				<Typography variant='text-medium'>{title}</Typography>
			</button>
			<div className={cn(styles.body, { [styles.active]: isActive })}>
				{children}
			</div>
		</div>
	)
}

export default Spoiler
