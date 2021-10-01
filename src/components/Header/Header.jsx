import style from './Header.module.scss'

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className="container">
				<div className={style.header__row}>
					<div className={style.header__logo}>
						Logo
					</div>
					<div className={style.header__phone}>
						Mobile phone
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header