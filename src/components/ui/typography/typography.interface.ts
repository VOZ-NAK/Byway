import { ComponentProps } from 'react'

type TVariant =
	| 'title-small'
	| 'title-medium'
	| 'title-large'
	| 'text-small'
	| 'text-medium'
	| 'text-large'

export interface ITypography extends ComponentProps<'p'> {
	variant: TVariant
}
