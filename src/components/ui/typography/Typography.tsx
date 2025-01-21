import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { ITypography } from './typography.interface'

const Typography: FC<PropsWithChildren<ITypography>> = ({
	variant,
	color,
	children,
	...props
}) => {
	return (
		<p {...props} className={cn(variant)} style={{ color: `var(${color})` }}>
			{children}
		</p>
	)
}

export default Typography

// Typography component for displaying text with different styles
//
//  Props:
//  - variant: text style ('title-small', 'title-medium', 'title-large', 'text-small', 'text-medium', 'text-large')
//  - color: (optional) text color in CSS variable format
//
//  Example usage:
//  <Typography variant="title-medium" color="--primary-color">Title</Typography>
