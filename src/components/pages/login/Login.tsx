import { signInWithEmailAndPassword } from 'firebase/auth'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '@/components/layout/Layout'
import { Button, Input, Typography } from '@/components/ui'

import styles from './login.module.scss'
import { auth } from '@/firebase/firebase'

const Login: FC = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState<{ email: string; password: string }>(
		{
			email: '',
			password: ''
		}
	)
	const [error, setError] = useState<string | null>(null)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			const { email, password } = formData
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)

			navigate('/')
		} catch (err: any) {
			setError('Invalid email or password')
			setFormData({
				email: '',
				password: ''
			})
		}
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
							{error && (
								<div>
									<Typography variant='text' color='--light-red'>
										{error}
									</Typography>
								</div>
							)}{' '}
							<Input
								type='email'
								label='Email'
								placeholder='johndoe@example.com'
								name='email'
								value={formData.email}
								onChange={e =>
									setFormData({ ...formData, email: e.target.value })
								}
								required
							/>
							<Input
								type='password'
								label='Password'
								placeholder='Password'
								name='password'
								value={formData.password}
								onChange={e =>
									setFormData({ ...formData, password: e.target.value })
								}
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
