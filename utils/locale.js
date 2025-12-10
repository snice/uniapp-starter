const messages = {}
// #ifndef VUE3
const moduleFiles = require.context('@/locale', true, /\.json$/);
moduleFiles.keys().forEach(it => {
	const name = it.substring(2, it.length - 5)
	messages[name] = moduleFiles(it)
})
// #endif

// #ifdef VUE3
const moduleFiles = import.meta.glob('../locale/*.json', {
	eager: true
})
Object.keys(moduleFiles).forEach(it => {
	const name = it.substring(it.lastIndexOf('/') + 1, it.length - 5).replace('locale/', '')
	messages[name] = moduleFiles[it].default
})
// #endif

if (!Object.keys(messages).includes('zh_CN')) {
	messages['zh_CN'] = messages['zh-Hans']
}

export {
	messages
}