import { connect } from "react-redux"
import { withRouter } from "react-router";
import { compose } from "redux";
import style from './ListMoreDetails.module.scss'

const ListMoreDetails = ({ list, match, ...props }) => {
	let listNumberId = match.params.id;

	return (
		<div className="container">
			<div className={style.list__item_text}>{list?.[listNumberId]}</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		list: state.mainList.list
	}
}

export default compose(
	connect(mapStateToProps, {}),
	withRouter
)(ListMoreDetails)