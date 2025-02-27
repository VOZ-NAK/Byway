import { ComponentProps, FC } from 'react'

import Typography from '../typography/Typography'

import styles from './textarea.module.scss'

interface ITextArea extends ComponentProps<'textarea'> {
	label: string
	placeholder?: string
}

const TextArea: FC<ITextArea> = ({ label, ...props }) => {
	return (
		<div className={styles.inputContainer}>
			<label className={styles.label} htmlFor={label}>
				<Typography variant='text-medium' color='--dark-gray'>
					{label}
				</Typography>
			</label>
			<textarea id={label} className={styles.input} {...props} />
		</div>
	)
}

export default TextArea
