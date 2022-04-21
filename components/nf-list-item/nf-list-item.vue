<template>
	<!-- #ifdef APP-NVUE -->
	<cell><slot></slot></cell>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<view><slot></slot></view>
	<!-- #endif -->
</template>

<script>
export default {
	name: 'nf-list-item'
};
</script>

<style></style>
