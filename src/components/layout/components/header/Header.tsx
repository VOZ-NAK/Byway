import cn from 'clsx'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthButton, SearchInput } from '@/components/ui'

import styles from './header.module.scss'

const Header: FC = () => {
	const [inputValue, setInputValue] = useState<string>('')
	const [isMobile, setIsMobile] = useState<boolean>(false)
	const navigate = useNavigate()

	const handleResize = () => {
		setIsMobile(window.innerWidth < 768)
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<Link
					to='/'
					className={cn(styles.header__logo, '_icon-byway')}
					aria-label='Logo'
				></Link>
				<SearchInput
					placeholder='Search...'
					onChange={handleChange}
					value={inputValue}
				/>
				<div className={styles.header__actions}>
					<a href='#' className={cn(styles.header__cart, '_icon-cart')}></a>
					<div className={styles.header__buttons}>
						{isMobile ? (
							<button
								className={cn(styles.header__iconUser, '_icon-user')}
							></button>
						) : (
							<>
								<AuthButton
									onClick={() => {
										navigate('/auth/login')
									}}
									bgColor='--light-teal'
								>
									Log in
								</AuthButton>
								<AuthButton
									onClick={() => {
										navigate('/auth/register')
									}}
									bgColor='--light-blue'
								>
									Sign up
								</AuthButton>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header
