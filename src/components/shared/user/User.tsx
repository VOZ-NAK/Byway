import { FC } from 'react'

import { Typography } from '@/components/ui'

import styles from './user.module.scss'
import { IUser } from '@/types/userTypes'

const User: FC<IUser> = ({ cover, name, headline }) => {
	return (
		<div className={styles.user}>
			<img src={cover} alt={`${cover} icon`} className={styles.user__avatar} />
			<div className={styles.user__info}>
				<Typography variant='text-medium' color='--teal'>
					{name}
				</Typography>
				<Typography variant='text-small'>{headline}</Typography>
			</div>
		</div>
	)
}

export default User
