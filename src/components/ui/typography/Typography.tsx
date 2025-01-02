import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { ITypography } from './typography.interface'

const Typography: FC<PropsWithChildren<ITypography>> = ({
	variant,
	children,
	...props
}) => {
	const classes = cn(variant, '')
	return (
		<p {...props} className={classes}>
			{children}
		</p>
	)
}

export default Typography
