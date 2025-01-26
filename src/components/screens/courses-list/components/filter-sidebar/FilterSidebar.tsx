import { FC } from 'react'

import { Spoiler } from '@/components/ui'

import styles from './filter-sidebar.module.scss'

const FilterSidebar: FC = () => {
	return (
		<aside className={styles.sidebarFilters}>
			<Spoiler title='Sort by'>
				<p>Cпойлер 1.</p>
				<p>Cпойлер 1.</p>
				<p>Cпойлер 1.</p>
				<p>Cпойлер 1.</p>
				<p>Cпойлер 1.</p>
			</Spoiler>
			<Spoiler title='Rating'>
				<p>Cпойлер 2.</p>
				<p>Cпойлер 2.</p>
				<p>Cпойлер 2.</p>
				<p>Cпойлер 2.</p>
				<p>Cпойлер 2.</p>
			</Spoiler>
			<Spoiler title='Price'>
				<p>Cпойлер 3.</p>
				<p>Cпойлер 3.</p>
				<p>Cпойлер 3.</p>
				<p>Cпойлер 3.</p>
				<p>Cпойлер 3.</p>
			</Spoiler>
			<Spoiler title='Category'>
				<p>Cпойлер 4.</p>
				<p>Cпойлер 4.</p>
				<p>Cпойлер 4.</p>
				<p>Cпойлер 4.</p>
				<p>Cпойлер 4.</p>
			</Spoiler>
		</aside>
	)
}
export default FilterSidebar
