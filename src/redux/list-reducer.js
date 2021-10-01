const SET_LIST = 'SET_LIST'
const INITIALIZE__SUCCESS = 'INITIALIZE__SUCCESS'

let initialState = {
	list: [],
	initialize: false
}

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIST: {
			return {
				...state,
				list: [...state.list, ...action.list]
			}
		}
		case INITIALIZE__SUCCESS: {
			return {
				...state,
				initialize: true
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

export const initializeSuccess = () => {
	return {
		type: INITIALIZE__SUCCESS
	}
}

export default listReducer