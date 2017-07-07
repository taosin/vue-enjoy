/*
* @Author: iMocco
* @Date:   2017-07-06 15:01:15
* @Last Modified by:   iMocco
* @Last Modified time: 2017-07-07 15:53:52
*/

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import createLogger from './plugins/logger'

import product from './product/';

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		product
	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
});