export default {
	locale: (state) => state.lang.locale,
	$t: (state) => (key) => {
		let messages = state.lang.messages
		let lang = state.lang.locale
		if (messages[lang] == undefined) {
			lang = 'en'
		}
		return messages[lang][key]
	}
}
