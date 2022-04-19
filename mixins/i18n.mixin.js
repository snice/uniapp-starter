import {
	useLangStore
} from '@/stores/lang.js'
export default {
	beforeCreate() {
		const self = this
		const isApp = this.$options['onLaunch'] != undefined
		if (!isApp)
			this.$i18n = {
				set locale(value) {
					self.langStore.setLocale(value);
				},
				get locale() {
					return self.langStore.locale;
				},
				set messages(value) {
					self.langStore.setMessages(value);
				}
			}
	},
	computed: {
		...mapStores(useLangStore)
	},
	methods: {
		$t(s) {
			return this.langStore.$t(s)
		}
	}
}
