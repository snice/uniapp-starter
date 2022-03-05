import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

const modules = {}
// #ifndef VUE3
const moduleFiles = require.context('./modules', true, /\.js$/);
moduleFiles.keys().forEach(it => {
	const name = it.substring(2, it.length - 3)
	modules[name] = moduleFiles(it).default
})
// #endif

// #ifdef VUE3
const moduleFiles = import.meta.globEager('./modules/*.js')
Object.keys(moduleFiles).forEach(it => {
	const name = it.substring(2, it.length - 3).replace('modules/', '')
	modules[name] = moduleFiles[it].default
})
// #endif

// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules
})

// #endif

// #ifdef VUE3
import {
	createStore
} from 'vuex'
const store = createStore({
	state,
	getters,
	actions,
	mutations,
	modules
})
// #endif

export default store
