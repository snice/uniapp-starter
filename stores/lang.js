import {
	messages
} from "@/utils/locale.js"
export const useLangStore = defineStore('lang', {
	state: () => {
		return {
			currentLocale: uni.getLocale() + '',
			messages
		};
	},
	getters: {
		locale: (state) => state.currentLocale,
		$t: (state) => (key) => {
			let messages = state.messages
			let lang = state.currentLocale
			if (messages[lang] == undefined) {
				lang = 'en'
			}
			return messages[lang][key]
		}
	},
	actions: {
		setLocale(locale) {
			if (this.currentLocale !== locale) {
				getApp().$locale = locale
				this.currentLocale = locale
			}
		},
		setMessages(messages) {
			this.messages = messages
		}
	},
});
