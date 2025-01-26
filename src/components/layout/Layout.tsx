import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import { Footer, Header } from './components'
import { ScrollToTop } from '@/utils'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<ScrollToTop />
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
