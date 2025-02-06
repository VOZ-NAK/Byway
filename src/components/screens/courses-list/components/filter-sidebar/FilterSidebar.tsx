import { FC } from 'react'

import { Spoiler } from '@/components/ui'

import styles from './filter-sidebar.module.scss'

const FilterSidebar: FC = () => {
	return (
		<aside className={styles.sidebarFilters}>
			<Spoiler title='Sort by'>
				<div className={styles.item}>Cпойлер 1.</div>
				<div className={styles.item}>Cпойлер 1.</div>
				<div className={styles.item}>Cпойлер 1.</div>
				<div className={styles.item}>Cпойлер 1.</div>
				<div className={styles.item}>Cпойлер 1.</div>
			</Spoiler>
			<Spoiler title='Rating'>
				<div className={styles.item}>Cпойлер 2.</div>
				<div className={styles.item}>Cпойлер 2.</div>
				<div className={styles.item}>Cпойлер 2.</div>
				<div className={styles.item}>Cпойлер 2.</div>
				<div className={styles.item}>Cпойлер 2.</div>
			</Spoiler>
			<Spoiler title='Price'>
				<div className={styles.item}>Cпойлер 3.</div>
				<div className={styles.item}>Cпойлер 3.</div>
				<div className={styles.item}>Cпойлер 3.</div>
				<div className={styles.item}>Cпойлер 3.</div>
				<div className={styles.item}>Cпойлер 3.</div>
			</Spoiler>
			<Spoiler title='Category'>
				<div className={styles.item}>Cпойлер 4.</div>
				<div className={styles.item}>Cпойлер 4.</div>
				<div className={styles.item}>Cпойлер 4.</div>
				<div className={styles.item}>Cпойлер 4.</div>
				<div className={styles.item}>Cпойлер 4.</div>
			</Spoiler>
		</aside>
	)
}
export default FilterSidebar
