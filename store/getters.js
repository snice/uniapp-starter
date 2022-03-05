export default {
	locale: (state) => state.lang.locale,
	$t: (state) => (key) => {
		return state.lang.messages[state.lang.locale][key]
	}
}
