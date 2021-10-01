import { NavLink } from 'react-router-dom'
import style from './Error.module.scss'

const ErrorC = () => {
	return (
		<div className={style.error__container}>
			<div className={style.error__text}>Error</div>
			<div className={style.error__code}> 404</div>
			<NavLink className={style.error__button} to={"/main"}>Go Home</NavLink>
		</div>
	)
}

export default ErrorC