export const useIndexStore = defineStore('index', {
	state: () => ({
		addResult: 0
	}),
	actions: {
		add() {
			this.addResult++;
		},
	},
});
