import { ThunkDispatch } from '@reduxjs/toolkit'
import { UnknownAction } from '@reduxjs/toolkit'
import cn from 'clsx'
import { onAuthStateChanged } from 'firebase/auth'
import { FC, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { setCurrentUser } from '@/store/actions/userActions'
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux'
import { RootState } from '@/store/store'

import { AuthButton, SearchInput } from '@/components/ui'

import styles from './header.module.scss'
import { auth } from '@/firebase/firebase'
import { getInitials } from '@/utils'

const Header: FC = () => {
	const [inputValue, setInputValue] = useState<string>('')
	const [isMobile, setIsMobile] = useState<boolean>(false)

	const dispatch =
		useAppDispatch<ThunkDispatch<RootState, undefined, UnknownAction>>()
	const navigate = useNavigate()

	const currentUser = useAppSelector(state => state.user.currentUser)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async firebaseUser => {
			if (firebaseUser) {
				dispatch(setCurrentUser(firebaseUser.uid))
			} else {
				dispatch(setCurrentUser(null))
			}
		})

		return () => unsubscribe()
	}, [dispatch])

	const handleResize = () => {
		setIsMobile(window.innerWidth < 768)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

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
					onChange={handleInputChange}
					value={inputValue}
				/>

				<div className={styles.header__actions}>
					<a href='#' className={cn(styles.header__cart, '_icon-cart')}></a>

					<div className={styles.header__buttons}>
						{currentUser ? (
							<div className={styles.header__profile}>
								<Link to='/profile' className={styles.header__avatar}>
									{currentUser.cover ? (
										<img src={currentUser.cover} alt='Profile' />
									) : (
										<div className={styles.header__avatarInitials}>
											{getInitials(currentUser.name)}
										</div>
									)}
								</Link>
							</div>
						) : isMobile ? (
							<button
								className={cn(styles.header__iconUser, '_icon-user')}
								onClick={() => navigate('/auth/login')}
							></button>
						) : (
							<>
								<AuthButton
									onClick={() => navigate('/auth/login')}
									bgColor='--light-teal'
								>
									Log in
								</AuthButton>
								<AuthButton
									onClick={() => navigate('/auth/register')}
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
