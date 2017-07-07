import * as types from './mutations_types.js'

export default {
	[types.QUERY_PRODUCTS](state, products){
		state.products = products;
	}
}