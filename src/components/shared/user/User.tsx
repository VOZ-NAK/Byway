import { FC } from 'react'

import { Typography } from '@/components/ui'

import styles from './User.module.scss'

interface IUser {
	avatar: string
	name: string
	title: string
}

const User: FC<IUser> = ({ avatar, name, title }) => {
	return (
		<div className={styles.user}>
			<img src='avatar.png' alt='avatar' className={styles.user__avatar} />
			<div className={styles.user__info}>
				<Typography variant='text-medium' color='--teal'>
					Ronald Richards
				</Typography>
				<Typography variant='text-small'>UI/UX Designer</Typography>
			</div>
		</div>
	)
}

export default User
