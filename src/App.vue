<template>
	<div id="app">
		<router-view></router-view>
		<bottom v-model="value" :current="current"></bottom>
	</div>
</template>

<script>
	import bottom from '@/components/bottom.vue'
	export default {
		name: 'app',
		components:{
			bottom
		},
		data () {
			return {
				value:[
				{ text:'精选', icon:'fa-home', url:'index' },
				{ text:'分类', icon:'fa-server', url:'cate' },
				{ text:'杂志', icon:'fa-paper-plane', url:'magazine' },
				{ text:'购物车', icon:'fa-tags', url:'cart' },
				{ text:'我的', icon:'fa-user-o', url:'my' },
				],
				current:0
			}
		},
		watch:{
		}
	}
</script>
<style scoped lang='less'>
</style>
