export const pixelRatio = uni.getSystemInfoSync().pixelRatio

export function px2rpx(px) {
	return Math.floor(Math.floor(px) * (100 / uni.upx2px(100)));
}

export function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
