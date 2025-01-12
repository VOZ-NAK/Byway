import { ComponentProps } from 'react'

type TColor =
	| '--light-gray'
	| '--light-background'
	| '--semi-transparent-light-gray'
	| '--semi-transparent-light-gray-2'
	| '--semi-transparent-blue'
	| '--dark-gray'
	| '--dark-background'
	| '--darker-background'
	| '--semi-transparent-dark-gray'
	| '--semi-transparent-darker-gray'
	| '--dark-navy'
	| '--charcoal-gray'
	| '--light-blue'
	| '--dark-blue'
	| '--teal'
	| '--bright-blue'
	| '--light-teal'
	| '--light-red'
	| '--yellow'
	| '--gray-blue'

type TVariant =
	| 'title-small'
	| 'title-medium'
	| 'title-large'
	| 'text'
	| 'text-small'
	| 'text-medium'
	| 'text-large'

export interface ITypography extends ComponentProps<'p'> {
	variant: TVariant
	color?: TColor
}
