import { useState } from 'react'

import Layout from '@/components/layout/Layout'
import { Button, Input, Typography } from '@/components/ui'

import styles from './register.module.scss'

const Register = () => {
	const [formData, setFormData] = useState<{
		name: string
		email: string
		password: string
	}>({
		name: '',
		email: '',
		password: ''
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		console.log('Name:', formData.name)
		console.log('Email:', formData.email)
		console.log('Password:', formData.password)

		setFormData({
			name: '',
			email: '',
			password: ''
		})
	}
	return (
		<Layout>
			<div className={styles.register}>
				<div className={styles.register__container}>
					<div className={styles.content}>
						<Typography variant='title-large'>Create Your Account</Typography>
						<form onSubmit={handleSubmit}>
							<Input
								type='text'
								label='Name'
								placeholder='John Doe'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
							/>
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

							<Button type='submit'>Create account</Button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Register
