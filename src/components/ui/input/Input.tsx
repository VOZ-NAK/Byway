import cn from 'clsx'
import { ComponentProps, FC } from 'react'

import styles from './input.module.scss'

const Input: FC<ComponentProps<'input'>> = ({ ...props }) => {
	return (
		<div className={styles.inputContainer}>
			<input className={styles.input} type='text' {...props} />
			<button
				type='submit'
				className={cn(styles.input__button, '_icon-search')}
			></button>
		</div>
	)
}
export default Input
