import { NavLink } from 'react-router-dom'
import style from './List.module.scss'

const List = (props) => {
	return props.items?.map((item, key) => {
		let firstSentence = item?.split('. ', 1)
		return <div key={key} className={style.list__item}>
			<div className={style.list__item_text}>
				{firstSentence}
			</div>
			<div className={style.list__item_button}>
				<NavLink className={style.arrow__circle} to={`/details/${key}`}>More details
					<svg className={style.arrow__circle_icon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
						<g fill="none" stroke="#6b8fff" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
							<circle className={style.arrow__circle_iconCircle} cx="16" cy="16" r="15.12"></circle>
							<path className={style.arrow_circle__iconArrow} d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
						</g>
					</svg>
				</NavLink>
			</div>
		</div>
	})
}


export default List