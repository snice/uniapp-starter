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
/**
 * 判断point是否在rect中
 * @param {DOMPoint} point 
 * @param {Object} rect 
 */
export function isInRect(point, rect) {
	return point.x >= rect.left && point.x <= rect.right && (point.y >= rect.top && point.y <= rect.bottom);
}
