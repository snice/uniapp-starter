# sn-uniapp-starter

#### 介绍
自定义 uniapp starter，打造自己的uniapp模板项目

#### 特性

* 基于vuex自定义国际化，支持vue2/vue3，vue/nvue


#### 使用

##### 国际化

* 获取当前语言

	```js
	this.$i18n.locale
	```
* 设置语言

	```js
	this.$i18n.locale = 'en'
	```

* vue中使用

	```vue
	<text>{{$t('app.name')}}</text>
	```

* nvue中使用

	首先，使用global.js

	```js
	import '@/global.js';
	export default {}
	```
	
	其次，使用$t('key')

	```vue
	<text>{{$t('app.name')}}</text>
	```
	
* 支持动态切换语言包

	```js
	this.$i18n.messages = {
		en: {
			'app.name': 'test'
		},
		'zh-Hans': {
			'app.name': '测试'
		},
		'zh-Hant': {
			'app.name': '測試'
		}
	}
	```
	
#### 已知问题

##### vue3 for app-nvue 不完全支持nvue

	目前测试发现，app-nvue已经支持vue3，但是nvue不能动态刷新数据