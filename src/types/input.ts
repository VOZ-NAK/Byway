import { ComponentProps } from 'react'

interface IInput extends ComponentProps<'input'> {
	label: string
	type: 'text' | 'email' | 'password'
	placeholder: string
}

export type { IInput }
