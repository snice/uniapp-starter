// #ifdef APP-PLUS
const Binding = uni.requireNativePlugin('bindingx');
// #endif
// #ifndef APP-PLUS
const Binding = {};
// #endif


export function getEl(el) {
	if (typeof el === 'string' || typeof el === 'number') return el;
	if (WXEnvironment) {
		return el.ref || el.$el.ref;
	} else {
		return el instanceof HTMLElement ? el : el.$el;
	}
}

/**
 * @param {Object} ref
 */
export function getComputedStyle(ref) {
	return Binding.getComputedStyle(getEl(ref))
}

/**
 * @param { Object } params
 * @param { Function } cb
 */
export function createBind(params, cb) {
	if (cb) return Binding.bind(params, cb)
	return Binding.bind(params)
}

/**
 * @param { Object } params
 * @param { Function } cb
 */
export function createAutoBind(params, cb) {
	let tokenObj = Binding.bind(params, e => {
		if (cb) cb(e)
		if (e.state === 'exit' || e.state == 'end')
			Binding.unbind({
				token: tokenObj.token,
				eventType: params.eventType
			});
	})
}

export function setAlpha(ref, value, cb) {
	createAutoBind({
		eventType: 'timing',
		exitExpression: 't>0',
		props: [{
			element: getEl(ref),
			property: 'opacity',
			expression: '0*t+' + value
		}]
	}, e => {
		if (e.state == 'exit' || e.state == 'end')
			cb && cb()
	})
}

/**
 * @param {Object} params
 */
export function unbind(params) {
	Binding.unbind(params)
}

export function unbindAll() {
	Binding.unbindAll()
}
