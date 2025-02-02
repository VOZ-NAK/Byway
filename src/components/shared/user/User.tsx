import { FC } from 'react'

import { Typography } from '@/components/ui'

import styles from './user.module.scss'
import { IUser } from '@/types'

const User: FC<IUser> = ({ avatar, name, title }) => {
	return (
		<div className={styles.user}>
			<img
				src={avatar}
				alt={`${avatar} icon`}
				className={styles.user__avatar}
			/>
			<div className={styles.user__info}>
				<Typography variant='text-medium' color='--teal'>
					{name}
				</Typography>
				<Typography variant='text-small'>{title}</Typography>
			</div>
		</div>
	)
}

export default User

// User component for displaying user information
//
// Props:
// - avatar: URL or path to the user's avatar image
// - name: the name of the user
// - title: the user's job title
//
// Example usage:
// <User avatar="path/to/avatar.png" name="Ronald Richards" title="UI/UX Designer" />
