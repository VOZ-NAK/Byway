import cn from 'clsx'
import { ComponentProps, FC } from 'react'

import styles from './search-input.module.scss'

const SearchInput: FC<ComponentProps<'input'>> = ({ ...props }) => {
	return (
		<div className={styles.inputContainer}>
			<input className={styles.input} type='text' {...props} />
			<button
				type='submit'
				className={cn(styles.input__button, '_icon-search')}
				aria-label='Search'
			></button>
		</div>
	)
}

export default SearchInput
