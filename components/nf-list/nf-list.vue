<template>
	<!-- #ifdef APP-NVUE -->
	<list ref="list"><slot></slot></list>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<view ref="list"><slot></slot></view>
	<!-- #endif -->
</template>

<script>
export default {
	name: 'nf-list'
};
</script>

<style></style>
