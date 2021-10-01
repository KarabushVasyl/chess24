const SET_LIST = 'SET_LIST'

let initialState = {
	list: []
}

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIST: {
			return {
				...state,
				list: [...state.list, ...action.list]
			}
		}
		default:
			return state
	}
}

export const setList = (list) => {

	return {
		type: SET_LIST,
		list
	}
}

export default listReducer