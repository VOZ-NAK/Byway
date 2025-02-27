import cn from 'clsx'
import { FC, useEffect, useState } from 'react'

import { updateUser } from '@/store/actions/userActions'
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux'

import { Typography } from '@/components/ui'

import styles from './user.module.scss'
import { IUser } from '@/types/userTypes'
import { getInitials } from '@/utils'

interface IUserCard extends IUser {
	isProfilePage?: boolean
}

const User: FC<IUserCard> = ({ cover, name, headline, isProfilePage }) => {
	const [photo, setPhoto] = useState<string | null>(cover || null)
	const dispatch = useAppDispatch()
	const currentUser = useAppSelector(state => state.user.currentUser)

	useEffect(() => {
		if (cover) {
			setPhoto(cover)
		}
	}, [cover])

	const handleChangePhoto = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = async () => {
				const newPhotoUrl = reader.result as string

				if (currentUser) {
					const updatedUserData = {
						...currentUser,
						cover: newPhotoUrl
					}

					await dispatch(
						updateUser({
							id: currentUser.id,
							data: updatedUserData
						})
					)

					localStorage.setItem('user', JSON.stringify(updatedUserData))

					setPhoto(newPhotoUrl)
				}
			}
			reader.readAsDataURL(file)
		}
	}

	const handleAvatarClick = () => {
		const input = document.getElementById('file-input') as HTMLInputElement
		if (input) input.click()
	}

	return (
		<div className={styles.user}>
			<div
				className={cn({
					[styles.user__avatarWrapper]: isProfilePage
				})}
			>
				{photo ? (
					<img
						src={photo}
						alt={`${name} icon`}
						className={cn(styles.user__avatar, {
							[styles.user__active]: isProfilePage
						})}
						onClick={handleAvatarClick}
					/>
				) : (
					<div
						className={cn(styles.user__avatar, {
							[styles.user__active]: isProfilePage
						})}
						onClick={handleAvatarClick}
					>
						{getInitials(name)}
					</div>
				)}

				{isProfilePage && (
					<input
						id='file-input'
						type='file'
						style={{ display: 'none' }}
						accept='image/*'
						onChange={handleChangePhoto}
					/>
				)}
			</div>

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
