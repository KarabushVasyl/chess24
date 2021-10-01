import * as axios from "axios"

const instance = axios.create({
	baseURL: 'https://baconipsum.com/api/?type=meat-and-filler'
})

export const listAPI = {
	getList() {
		return instance.get(``).then(response => response.data)
	}
}