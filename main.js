import App from './App'
import i18nMixin from '@/mixins/i18n.mixin.js'
import themeMixin from '@/mixins/theme.mixin.js'
import * as Pinia from 'pinia'
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	app.mixin(i18nMixin)
	app.mixin(themeMixin)
	return {
		app,
		Pinia
	}
}
