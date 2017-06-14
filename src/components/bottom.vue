<template>
	<div class="e-bottom">
		<div class="e-bottom-item">
			<ul>
				<li v-for="(item, index) in items" :style="{width:width+'%'}" :class="current === index ? 'current':''" @click="current=index">
					<i class="fa " :class="item.icon"></i>
					<p>{{item.text}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bottom',
		props:{
			value: {
				type: Array,
				default: false
			},
			current: {
				type: Number,
				default: 0
			}
		},
		data () {
			return {
				items: this.value,
				width: 100 / this.value.length
			}
		},
		watch: {
			value (val) {
				this.items = val;
				this.width = 100 % val.length;
			}
		}

	}
</script>

<style scoped lang="less">
	.e-bottom{
		width: 100%;
		position: absolute;
		bottom: 0;
		overflow: hidden;
		.e-bottom-item{
			width: 100%;
			border-top: 1px solid;
			ul{
				padding: 0;
				margin-top: 5px;
				height: 25px;
				li{
					padding: 0;
					list-style: none;
					float: left;
					text-align: center;
					color: #666;
					p{
						font-size: small;
						padding: 0;
						margin: 0;
					}
				}
				.current{
					color:#000;
				}
				li:last-child{
					border: none;
				}
			}

		}
	}
</style>
