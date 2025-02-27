import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { logoutUser } from '@/store/actions/authActions'
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux'

import { Typography, User } from '@/components/ui'

import { ProfileSections } from '../../UserProfile'

import styles from './profile-aside.module.scss'

interface IProfileAside {
	selectedSection: ProfileSections
	onSelectSection: (section: ProfileSections) => void
}

const ProfileAside: FC<IProfileAside> = ({
	selectedSection,
	onSelectSection
}) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const currentUser = useAppSelector(state => state.user.currentUser)

	const menuItems = [
		{ label: 'Profile', section: ProfileSections.PROFILE },
		{ label: 'Courses', section: ProfileSections.COURSES },
		{ label: 'Purchases', section: ProfileSections.PURCHASES },
		{ label: 'Shopping cart', section: ProfileSections.CART },
		{ label: 'Wishlist', section: ProfileSections.WISHLIST },
		{
			label: 'Log out',
			section: ProfileSections.LOGOUT,
			onClick: async () => {
				await dispatch(logoutUser())
				navigate('/')
			}
		}
	]

	return (
		<aside className={styles.profileAside}>
			<div>
				<User {...currentUser} isProfilePage={true} />
			</div>
			<ul>
				{menuItems.map(({ label, section, onClick }) => (
					<li
						key={section}
						onClick={() => {
							onSelectSection(section)
							if (onClick) onClick()
						}}
						className={selectedSection === section ? styles.selected : ''}
					>
						<Typography
							variant='text-medium'
							color={
								selectedSection === section
									? '--semi-transparent-light-gray-2'
									: '--dark-background'
							}
						>
							{label}
						</Typography>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default ProfileAside
