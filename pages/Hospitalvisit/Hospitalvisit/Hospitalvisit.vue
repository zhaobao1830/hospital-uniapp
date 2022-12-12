<template>
	<view class="content">
		<view class="search-grid">
			<search-component @search="search"></search-component>
		</view>
	</view>
</template>

<script>
	import SearchComponent from '../../../components/base/Search/SearchComponent.vue'

	export default {
		data() {
			return {

			}
		},
		methods: {
      search(val) {
        console.log(val)
      }
		},
		components: {
			SearchComponent
		}
	}
</script>

<style lang="scss">
  .content{

  }
</style>
