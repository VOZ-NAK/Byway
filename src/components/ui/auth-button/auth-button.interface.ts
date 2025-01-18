import { ComponentProps } from 'react'

import { TColor } from '@/types'

export interface IAuthButton extends ComponentProps<'button'> {
	bgColor: TColor
}
