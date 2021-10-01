import { useEffect } from "react"
import { connect } from 'react-redux'
import { listAPI } from '../../api/api'
import List from './List/List'
import { setList, initializeSuccess } from '../../redux/list-reducer'
import Preloader from "../Preloader/Preloader"
import style from './Main.module.scss'



const Main = ({ list, setList, initializeSuccess, initialize, ...props }) => {
	useEffect(async () => {
		if (list.length === 0) {
			await listAPI.getList()
				.then(result => {
					setList(result)
				})
			initializeSuccess()
		}
	}, [])

	if (!initialize) {
		return (
			<Preloader />
		)
	}

	return (
		<div>
			<div className="container">
				<List items={list} />
				<div className={style.controllers__container}>
					<button className={style.reset__button}
						onClick={() => {
							listAPI.getList()
								.then(result => setList(result))
						}}>More</button>
				</div>
			</div>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		list: state.mainList.list,
		initialize: state.mainList.initialize
	}
}

export default connect(mapStateToProps, { setList, initializeSuccess })(Main)
