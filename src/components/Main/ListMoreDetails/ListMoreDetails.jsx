import style from './ListMoreDetails.module.scss'
import { connect } from "react-redux"
import { withRouter } from "react-router";
import { compose } from "redux";

const ListMoreDetails = (props) => {
	let listNumberId = props.match.params.id;

	return (
		<div className="container">
			<div className={style.list__item_text}>{props.list[listNumberId]}</div>
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