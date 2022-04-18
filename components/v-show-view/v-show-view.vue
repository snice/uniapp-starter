<template>
	<!-- #ifdef APP-NVUE -->
	<view v-weex-show="show"><slot></slot></view>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<view v-show="show"><slot></slot></view>
	<!-- #endif -->
</template>

<script>
// #ifdef APP-NVUE
import weexVShow from '@/directives/weex-v-show.js';
// #endif
export default {
	name: 'v-show-view',
	// #ifdef APP-NVUE
	directives: {
		weexShow: weexVShow
	},
	// #endif
	props: {
		show: Boolean
	}
};
</script>

<style></style>
