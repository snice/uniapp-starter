<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// FIXME: 修复vue3 nvue 不刷新vuex
			// // #ifdef APP-PLUS
			// uni.$on('changeLocale', locale => {
			// 	getCurrentPages().forEach(page => {
			// 		page.$forceUpdate()
			// 	})
			// })
			// // #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
