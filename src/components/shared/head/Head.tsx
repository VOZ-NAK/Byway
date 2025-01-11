import { FC } from 'react'

import { Button, Typography } from '@/components/ui/index'

import styles from './Head.module.scss'
import { IHead } from './head.interface'

const Head: FC<IHead> = ({ buttonText, onClick, title }) => {
	return (
		<div className={styles.head}>
			<Typography variant='title-large' color='--dark-background'>
				{title}
			</Typography>
			<Button onClick={onClick}>{buttonText}</Button>
		</div>
	)
}
export default Head

// Head component for displaying a title and a button
//
// Props:
// - title: string to display as the heading
// - buttonText: string to display on the button
// - onClick: function to handle button click events
//
// Example usage:
// <Head title="Welcome" buttonText="Get Started" onClick={handleClick} />
