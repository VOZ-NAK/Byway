import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import { Footer, Header } from './components'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
