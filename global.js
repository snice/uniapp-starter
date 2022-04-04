// #ifdef APP-NVUE
import i18nMixin from '@/mixins/i18n.mixin.js'
import themeMixin from '@/mixins/theme.mixin.js'
// #endif
/**
 * @param {VueInstance} vueInstance
 */
export default function(vueInstance) {
	return Object.assign({
		// #ifdef APP-NVUE
		mixins: [i18nMixin, themeMixin]
		// #endif
	}, vueInstance)
}
