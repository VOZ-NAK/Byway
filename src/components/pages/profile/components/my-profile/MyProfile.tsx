import { FC, useEffect, useState } from 'react'
import InputMask from 'react-input-mask'

import { updateUser } from '@/store/actions/userActions'
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux'

import { Button, Input, Select, TextArea } from '@/components/ui'

import styles from './my-profile.module.scss'

const MyProfile: FC = () => {
	const dispatch = useAppDispatch()
	const { currentUser, isLoading } = useAppSelector(state => state.user)
	const [selectedLanguage, setSelectedLanguage] = useState('en')

	const [formData, setFormData] = useState({
		name: '',
		headline: '',
		description: '',
		socials: {
			twitter: '',
			instagram: '',
			byway: ''
		}
	})

	useEffect(() => {
		if (currentUser) {
			setFormData({
				...currentUser,
				name: currentUser.name || '',
				headline: currentUser.headline || '',
				description: currentUser.description || '',
				socials: currentUser.socials || {
					twitter: '',
					instagram: '',
					byway: ''
				}
			})
		}
	}, [currentUser])

	if (isLoading) {
		return <div>Загрузка...</div>
	}

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target

		if (name.startsWith('socials.')) {
			const socialKey = name.split('.')[1]
			setFormData(prevState => ({
				...prevState,
				socials: {
					...prevState.socials,
					[socialKey]: value
				}
			}))
		} else {
			setFormData(prevState => ({
				...prevState,
				[name]: value
			}))
		}
	}

	const handleLanguageChange = (value: string) => {
		setSelectedLanguage(value)
	}

	const languageOptions = [
		{ label: 'English', value: 'en' },
		{ label: 'Русский', value: 'ru' }
	]

	const handleSaveChanges = async () => {
		await dispatch(updateUser({ id: currentUser.id, data: formData })).unwrap()
	}

	return (
		<section className={styles.myProfile}>
			<Input
				label='Name'
				name='name'
				value={formData.name}
				onChange={handleChange}
			/>
			<Input
				label='Headline'
				name='headline'
				value={formData.headline}
				onChange={handleChange}
			/>
			<TextArea
				label='Description'
				name='description'
				value={formData.description}
				onChange={handleChange}
			/>
			<Select
				label='Language'
				value={selectedLanguage}
				onChange={handleLanguageChange}
				options={languageOptions}
			/>
			<div>
				<InputMask
					mask='twitter.com/*************************************'
					maskChar=''
					value={formData.socials.twitter}
					onChange={handleChange}
					name='socials.twitter'
					alwaysShowMask
					formatChars={{
						'*': '.'
					}}
				>
					{(inputProps: any) => (
						<Input {...inputProps} type='text' label='Links' />
					)}
				</InputMask>

				<InputMask
					mask='instagram.com/*************************************'
					maskChar=''
					value={formData.socials.instagram}
					onChange={handleChange}
					name='socials.instagram'
					alwaysShowMask
					formatChars={{
						'*': '.'
					}}
				>
					{(inputProps: any) => <Input {...inputProps} type='text' />}
				</InputMask>

				<InputMask
					mask='byway.com/*************************************'
					maskChar=''
					value={formData.socials.byway}
					onChange={handleChange}
					name='socials.byway'
					formatChars={{
						'*': '.'
					}}
					alwaysShowMask
				>
					{(inputProps: any) => <Input {...inputProps} type='text' />}
				</InputMask>
			</div>
			<Button onClick={handleSaveChanges}>Save changes</Button>
		</section>
	)
}

export default MyProfile
