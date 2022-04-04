<template>
	<view>
		<text>【app.name】= {{$t('app.name')}}</text>
		<view style="display: flex;flex-direction: row;">
			<button class="button" type="default" @click="changeLocale('zh-Hans')">简体中文</button>
			<button class="button" type="default" @click="changeLocale('en')">英文</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			changeLocale(locale) {
				this.$i18n.locale = locale
			},
		}
	}
</script>

<style>

</style>
