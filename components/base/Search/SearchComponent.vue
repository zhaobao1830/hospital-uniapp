<template>
	<view class="sarch-component">
		<view class="search-content">
			<image class="search-icon" src="/static/image/search/icon_search.png"></image>
			<input
			  class="search-input"
        v-model="searchValue"
        :placeholder="placeholder"
				confirm-type="search"
        @keyup.enter="onEnter"/>
		</view>
		<image class="scaning-icon" src="/static/image/search/icon_scaning.png"></image>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: {
				type: String,
				default: '请输入搜索关键词'
			}
		},
		data() {
			return {
				searchValue: ''
			}
		},
		methods: {
			onEnter() {
				this.$emit('search', this.searchValue)
			}
		}
	}
</script>

<style lang="scss">
	.sarch-component{
		background-color: $colorPrimary;
		position: relative;
		height: 92rpx;
		overflow: hidden;
		.search-content{
			margin: 16rpx 100rpx;
			height: 60rpx;
			display: flex;
			align-items: center;
			border-radius: 30rpx;
			background-color: $colorless_11;
			box-sizing: border-box;
			padding: 0 30rpx;
			.search-icon{
			  width: 24rpx;
			  height: 24rpx;
			}
			.search-input{
			  width: 100%;
			  height: 60rpx;
			  margin-left: 20rpx;
			  font-size: 24rpx;
			  font-weight: 400;
			  color: $colorless_2;
			}	    
		}
		.scaning-icon{
			position: absolute;
			top: 24rpx;
			left: 30rpx;
			width: 44rpx;
			height: 44rpx;
		}
	}
</style>