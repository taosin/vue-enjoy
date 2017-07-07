import * as types from './mutations_types';
import service from './service'
export default {

	queryProducts ({ commit }) {
		service.queryProducts(products => {
			commit(types.QUERY_PRODUCTS, { products })
		})
	}
};