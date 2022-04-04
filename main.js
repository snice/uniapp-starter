import App from './App'
import store from '@/store/index.js'
import i18nMixin from '@/mixins/i18n.mixin.js'
import themeMixin from '@/mixins/theme.mixin.js'
// #ifdef VUE3 && APP-PLUS
import Vuex from 'vuex'
// #endif
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.mixin(i18nMixin)
Vue.mixin(themeMixin)
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.mixin(i18nMixin)
	app.mixin(themeMixin)
	return {
		// #ifdef APP-PLUS
		Vuex,
		// #endif
		app
	}
}
// #endif
