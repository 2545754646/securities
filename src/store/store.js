import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const options = {
	
}
export default new Vuex.Store({
	state: {
		getCode: {
			code_name: '',
			code: ''
		},
//		total: '',
		stockList: {
			HKAllStockList: [],  //全部港股列表
			AmericaAllStockList: []  //全部美股列表
		},
		//存储token
		token: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
	},
	getters: {
		
	},
	mutations: {
		submitCode (state,data) {
			this.state.getCode.code_name = data.code_name;
			this.state.getCode.code = data.code
		},
		putTotalPage (state,data) {
			
//			this.state.total = data.aa;
		},
		getHKStockTableList (state,data) {
			state.stockList.HKAllStockList = data.totalCount;
		},
		changeLogin (state, user) {
			state.token = user.Authorization
			localStorage.setItem('Authorization',user.Authorization);
		},
		del_token (state) {
			state.token =''
			localStorage.removeItem('Authorization')
		}
	},
	actions: {
		
	}
})
