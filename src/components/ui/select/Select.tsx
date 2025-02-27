import cn from 'clsx'
import { FC, useState } from 'react'

import Typography from '../typography/Typography'

import styles from './select.module.scss'

interface ISelect {
	label: string
	options: { label: string; value: string }[]
	value: string
	onChange: (value: string) => void
}

const Select: FC<ISelect> = ({ label, options, value, onChange }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSelect = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = (optionValue: string) => {
		onChange(optionValue)
		setIsOpen(false)
	}

	return (
		<div className={styles.select}>
			<label className={styles.label}>
				<Typography variant='text-medium' color='--dark-gray'>
					{label}
				</Typography>
			</label>
			<div className={styles.body}>
				<div
					className={cn(styles.selectContainer, { [styles.open]: isOpen })}
					onClick={toggleSelect}
				>
					<div
						className={cn(styles.title, '_icon-down-chevron', {
							[styles.active]: isOpen
						})}
					>
						<Typography variant='text-medium' color='--dark-gray'>
							{options.find(option => option.value === value)?.label}
						</Typography>
					</div>
				</div>

				{isOpen && (
					<div className={styles.optionsList}>
						{options.map(option => (
							<div
								key={option.value}
								className={styles.option}
								onClick={() => handleOptionClick(option.value)}
							>
								<Typography variant='text-medium'>{option.label}</Typography>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Select
