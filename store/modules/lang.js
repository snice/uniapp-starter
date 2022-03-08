import {
	messages
} from "@/utils/locale.js"
export default {
	namespaced: true,
	state: {
		locale: uni.getLocale(),
		messages
	},
	mutations: {
		setMessages(state, messages) {
			state.messages = messages
		},
		setLocale(state, locale) {
			if (state.locale !== locale) {
				getApp().$locale = locale
				state.locale = locale
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
