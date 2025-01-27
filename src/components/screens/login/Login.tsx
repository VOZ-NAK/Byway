import { FC, useState } from 'react'

import Layout from '@/components/layout/Layout'
import { Button, Input, Typography } from '@/components/ui'

import styles from './login.module.scss'

const Login: FC = () => {
	const [formData, setFormData] = useState<{ email: string; password: string }>(
		{
			email: '',
			password: ''
		}
	)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		console.log('Email:', formData.email)
		console.log('Password:', formData.password)

		setFormData({
			email: '',
			password: ''
		})
	}

	return (
		<Layout>
			<div className={styles.login}>
				<div className={styles.login__container}>
					<div className={styles.content}>
						<Typography variant='title-large'>
							Log in to your account
						</Typography>
						<form onSubmit={handleSubmit}>
							<Input
								type='email'
								label='Email'
								placeholder='johndoe@example.com'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<Input
								type='password'
								label='Password'
								placeholder='Password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								required
							/>

							<Button type='submit'>Sign in</Button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Login
