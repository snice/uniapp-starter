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
				uni.$emit('changeLocale', locale)
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
