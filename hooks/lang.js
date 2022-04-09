import {
	useStore
} from 'vuex';

export function useLang() {
	const store = useStore();
	const i18n = {
		set locale(value) {
			store.dispatch('lang/setLocale', value);
		},
		get locale() {
			return store.getters.locale;
		},
		set messages(value) {
			store.dispatch('lang/setMessages', value);
		}
	}
	const $t = s => {
		return store.getters.$t(s)
	}
	return {
		i18n,
		$t
	}
}
