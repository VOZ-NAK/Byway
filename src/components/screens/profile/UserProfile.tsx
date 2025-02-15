import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import { ProfileAside } from './components'
import styles from './user-profile.module.scss'

const Profile: FC = () => {
	return (
		<Layout>
			<section className={styles.profile}>
				<ProfileAside />
				<div></div>
			</section>
		</Layout>
	)
}
export default Profile
