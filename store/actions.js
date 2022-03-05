// store.dispatch('add', {a:1})
export default {
	add({
		commit
	}, payload) {
		commit('add', payload)
	},
	setLocale: ({
		commit
	}, locale) => {
		commit('lang/setLocale', locale)
	}
}
