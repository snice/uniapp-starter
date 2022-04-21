// #ifdef APP-PLUS
const dom = uni.requireNativePlugin('dom')
// #endif
// #ifndef APP-PLUS
const dom = {};
// #endif

export function getComponentRect(ref) {
	return new Promise(resolve => dom.getComponentRect(ref, resolve));
}

export function scrollToElement(ref, options) {
	dom.scrollToElement(ref, options);
}
