import { FC, PropsWithChildren, useState } from 'react'

import { IAuthButton } from './auth-button.interface'
import styles from './auth-button.module.scss'

const AuthButton: FC<PropsWithChildren<IAuthButton>> = ({
	children,
	bgColor,
	onClick,
	...props
}) => {
	const [isHovered, setIsHovered] = useState(false)

	const buttonStyle = {
		backgroundColor: `var(${bgColor})`,
		boxShadow: isHovered ? `0 0 15px var(${bgColor})` : 'none'
	}
	return (
		<button
			className={styles.button}
			style={buttonStyle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	)
}
export default AuthButton

// AuthButton component for authentication actions
//
// Props:
// - bgColor: CSS variable for the button's background color
// - onClick: function to handle button click events
//
// Example usage:
// <AuthButton bgColor="--primary-color" onClick={handleAuth}>Login</AuthButton>
