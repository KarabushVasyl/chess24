import style from './Main.module.scss'
import { useEffect, useState } from "react"
import { listAPI } from '../../api/api'
import List from './List/List'
import { connect } from 'react-redux'
import { setList } from '../../redux/list-reducer'

const Main = (props) => {
	useEffect(async () => {
		if (props.list.length === 0) {
			listAPI.getList()
				.then(result => props.setList(result))
		}
	}, [])

	return (
		<div>
			<div className="container">
				<List items={props.list} />
				<div className={style.controllers__container}>
					<button className={style.reset__button}
						onClick={() => {
							listAPI.getList()
								.then(result => props.setList(result))
						}}>More</button>
				</div>
			</div>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		list: state.mainList.list
	}
}

export default connect(mapStateToProps, { setList })(Main)