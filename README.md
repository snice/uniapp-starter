# sn-uniapp-starter

#### 介绍
自定义 uniapp starter，打造自己的uniapp模板项目

#### 特性

* 基于vuex自定义国际化，支持vue2/vue3，vue/nvue


#### 使用

##### 国际化

	基于vuex实现，易扩展，兼容@dcloudio/uni-i18n（即uni-ui也支持国际化），API设计兼容uniapp官方国际化方案

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
	import Global from '@/global.js'
	export default Object.assign(Global, {
		
	})
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

	从HBX 3.4.3 Alpha开始，app-nvue已经支持vue3，但是还是存在兼容问题
	
* 不能在app-nvue引入vuex

```js
import * as Vuex from 'vuex';
// Vuex.default 是undefined
```