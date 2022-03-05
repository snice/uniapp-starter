// store.commit('add', {a:10})
export default {
	add(state, payload) {
		state.addResult = payload.a
	}
}
