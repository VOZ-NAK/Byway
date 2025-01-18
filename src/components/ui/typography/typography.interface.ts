import { ComponentProps } from 'react'

import { TColor } from '@/types'

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
