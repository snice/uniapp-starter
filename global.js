// #ifdef APP-NVUE
import i18nMixin from '@/mixins/i18n.mixin.js'
import themeMixin from '@/mixins/theme.mixin.js'
// #endif
export default {
	// #ifdef APP-NVUE
	mixins: [i18nMixin, themeMixin]
	// #endif
}
