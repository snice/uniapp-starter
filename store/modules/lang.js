import {
	messages
} from "@/utils/locale.js"
export default {
	namespaced: true,
	state: {
		locale: uni.getLocale(),
		messages
	},
	getters: {
		$t: (state) => (key) => {
			return state.messages[state.locale][key]
		}
	},
	mutations: {
		setMessages(state, messages) {
			state.messages = messages
		},
		setLocale(state, locale) {
			if (state.locale !== locale) {
				state.locale = locale
				// FIXME: 修复vue3 nvue 不刷新vuex
				// // #ifdef  VUE3
				// uni.$emit('changeLocale', locale)
				// // #endif
				// TODO: 持久化切换语言
				// // #ifdef H5
				// uni.setLocale(locale)
				// // #endif
			}
		}
	},
	actions: {
		setMessages({
			commit
		}, messages) {
			commit('setMessages', messages)
		},
		setLocale({
			commit
		}, locale) {
			commit('setLocale', locale)
		}
	}
}
