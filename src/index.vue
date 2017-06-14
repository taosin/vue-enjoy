<template>
	<div>
		<bottom v-model="value" :current.sync="current"></bottom>
	</div>
</template>
<script>
	import bottom from '@/components/bottom.vue'
	export default {
		components:{
			bottom
		},
		name: 'index',
		data () {
			return {
				value:[
				{ text:'精选', icon:'fa-home' },
				{ text:'分类', icon:'fa-server' },
				{ text:'杂志', icon:'fa-paper-plane' },
				{ text:'购物车', icon:'fa-tags' },
				{ text:'我的', icon:'fa-user-o' },
				],
				current:0
			}
		}
	}
</script>

<style scoped>
</style>