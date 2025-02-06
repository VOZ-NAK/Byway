import cn from 'clsx'
import { FC } from 'react'
import { ComponentProps } from 'react'

import Typography from '../typography/Typography'

import styles from './input.module.scss'

interface IInput extends ComponentProps<'input'> {
	label: string
	type: 'text' | 'email' | 'password'
	placeholder: string
}

const Input: FC<IInput> = ({ label, type, ...props }) => {
	return (
		<div className={styles.inputContainer}>
			<label className={styles.label} htmlFor={label}>
				<Typography variant='text-medium' color='--dark-gray'>
					{label}
				</Typography>
			</label>
			<input className={styles.input} type={type} {...props} />
		</div>
	)
}
export default Input
