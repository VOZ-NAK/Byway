import { FC } from 'react'
import { useRouteError } from 'react-router-dom'

import styles from './error-page.module.scss'

interface IRouteError {
	statusText?: string
	message?: string
}
export type { IRouteError }

const ErrorPage: FC = () => {
	return (
		<div className={styles.errorPage}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>Unknown error</i>
			</p>
		</div>
	)
}

export default ErrorPage
