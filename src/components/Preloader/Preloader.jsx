import style from './Preloader.module.scss'

const Preloader = () => {
	return (

		<div className={style.loading__container}>
			<div className={style.loading}>
				<div className={style.dot}></div>
				<div className={style.dot}></div>
				<div className={style.dot}></div>
				<div className={style.dot}></div>
				<div className={style.dot}></div>
			</div>
		</div>

	)
}

export default Preloader