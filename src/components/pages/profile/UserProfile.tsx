import { FC, useState } from 'react'

import Layout from '@/components/layout/Layout'
import { Typography } from '@/components/ui'

import { ProfileAside } from './components'
import { MyCourses, MyProfile } from './components'
import styles from './user-profile.module.scss'

export enum ProfileSections {
	PROFILE = 'profile',
	COURSES = 'courses',
	PURCHASES = 'purchases',
	CART = 'cart',
	WISHLIST = 'wishlist',
	LOGOUT = 'logout'
}

const Profile: FC = () => {
	const [selectedSection, setSelectedSection] = useState<ProfileSections>(
		ProfileSections.PROFILE
	)

	const renderSection = () => {
		switch (selectedSection) {
			case ProfileSections.PROFILE:
				return <MyProfile />
			case ProfileSections.COURSES:
				return <MyCourses />
			case ProfileSections.PURCHASES:
				return 'Purchases'
			case ProfileSections.CART:
				return 'Cart'
			case ProfileSections.WISHLIST:
				return 'Wishlist'
			default:
				return <MyProfile />
		}
	}

	return (
		<Layout>
			<section className={styles.title}>
				<div className={styles.title__container}>
					<Typography variant='title-large'>My profile</Typography>
				</div>
			</section>
			<section className={styles.profile}>
				<div className={styles.profile__container}>
					<ProfileAside
						selectedSection={selectedSection}
						onSelectSection={setSelectedSection}
					/>
					<div className={styles.profile__body}>{renderSection()}</div>
				</div>
			</section>
		</Layout>
	)
}

export default Profile
