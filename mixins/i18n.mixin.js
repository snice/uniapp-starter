export default {
	beforeCreate() {
		const self = this
		const isApp = this.$options['onLaunch'] != undefined
		if (!isApp)
			this.$i18n = {
				set locale(value) {
					self.$store.dispatch('lang/setLocale', value);
				},
				get locale() {
					return self.$store.getters.locale;
				},
				set messages(value) {
					self.$store.dispatch('lang/setMessages', value);
				}
			}
	},
	mounted() {},
	methods: {
		$t(s) {
			return this.$store.getters.$t(s)
		}
	}
}
