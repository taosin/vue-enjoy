<template>
	<div class="e-bottom">
		<div class="e-px"></div>
		<div class="e-bottom-item">
			<ul>
				<li v-for="(item, index) in items" :style="{width:width+'%'}" :class="currentVal === index ? 'current':''" @click="goto(index)">
					<i class="fa " :class="item.icon"></i>
					<p>{{item.text}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
s
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
				width: 100 / this.value.length,
				currentVal: this.current
			}
		},
		watch: {
			value (val) {
				this.items = val;
				this.width = 100 % val.length;
			},
			current (val) {
				this.currentVal = val;
			}
		},
		methods:{
			goto(index){
				this.currentVal = index;
				const url = this.value[index].url;
				this.$router.push(url);
			}
		}

	}
</script>

<style scoped lang="less">
	.e-bottom{
		width: 100%;
		position: fixed;
		bottom: 0;
		overflow: hidden;
		background: #fff;
		z-index: 9999;
		.e-bottom-item{
			ul{
				padding: 0;
				margin-top: 5px;
				height: 25px;
				li{
					padding: 0;
					list-style: none;
					float: left;
					text-align: center;
					color: #8d8d8d;
					p{
						font-size: small;
						padding: 0;
						margin: 0;
					}
				}
				.current{
					color:#262626;
				}
				li:last-child{
					border: none;
				}
			}

		}
	}
</style>
