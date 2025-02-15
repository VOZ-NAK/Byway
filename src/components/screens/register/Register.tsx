import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { registerUser } from '@/store/actions'

import Layout from '@/components/layout/Layout'
import { Button, Input, Typography } from '@/components/ui'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'

import styles from './register.module.scss'

const Register = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { isLoading, error } = useAppSelector(state => state.auth)

	const formRef = useRef<HTMLFormElement>(null)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const formData = new FormData(formRef.current!)
		const userData = {
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			password: formData.get('password') as string
		}

		const resultAction = await dispatch(registerUser(userData))

		if (registerUser.rejected.match(resultAction)) {
			const failedFields = ['email', 'password']
			failedFields.forEach(field => {
				const input = formRef.current?.elements.namedItem(
					field
				) as HTMLInputElement
				if (input) input.value = ''
			})
		} else {
			formRef.current?.reset()
			navigate('/')
		}
	}

	return (
		<Layout>
			<div className={styles.register}>
				<div className={styles.register__container}>
					<div className={styles.content}>
						<Typography variant='title-large'>Создайте аккаунт</Typography>
						<form ref={formRef} onSubmit={handleSubmit}>
							<Input
								type='text'
								label='Name'
								placeholder='John Doe'
								name='name'
								required
							/>
							<Input
								type='email'
								label='Email'
								placeholder='johndoe@example.com'
								name='email'
								required
							/>
							<Input
								type='password'
								label='Пароль'
								placeholder='password'
								name='password'
								required
							/>

							<Button type='submit'>
								{isLoading ? 'Create account...' : 'Create account'}
							</Button>
						</form>

						{error && (
							<Typography variant='text' color='--light-red'>
								{error}
							</Typography>
						)}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Register
