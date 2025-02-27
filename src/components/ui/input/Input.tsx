import { ComponentProps, FC } from 'react'

import Typography from '../typography/Typography'

import styles from './input.module.scss'

interface IInput extends ComponentProps<'input'> {
	label?: string
	placeholder?: string
}

const Input: FC<IInput> = ({ label, ...props }) => {
	return (
		<div className={styles.inputContainer}>
			<label className={styles.label} htmlFor={label}>
				<Typography variant='text-medium' color='--dark-gray'>
					{label}
				</Typography>
			</label>
			<input className={styles.input} {...props} />
		</div>
	)
}
export default Input
