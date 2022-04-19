import {
	useLangStore
} from '@/stores/lang.js'
export function useLang() {
	const store = useLangStore();
	const i18n = {
		set locale(value) {
			store.setLocale(value);
		},
		get locale() {
			return store.locale;
		},
		set messages(value) {
			store.setMessages(value);
		}
	}
	const $t = s => {
		return store.$t(s)
	}
	return {
		i18n,
		$t
	}
}
