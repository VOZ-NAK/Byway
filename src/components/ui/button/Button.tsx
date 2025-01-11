import cn from 'clsx'
import { ComponentProps, FC, PropsWithChildren } from 'react'

import styles from './button.module.scss'

const Button: FC<PropsWithChildren<ComponentProps<'button'>>> = ({
	children,
	...props
}) => {
	return (
		<button className={cn(styles.button, '_icon-chevron-right')} {...props}>
			{children}
		</button>
	)
}
export default Button
