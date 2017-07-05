<template>
	<div class="e-my">
		<div class="e-my-top">
			<p>
				<i class="fa fa-message"></i>
			</p>
			<div class="e-my-info">
				<img src="./../assets/logo.png">
				<p>Nixxi</p>
			</div>
		</div>
		<div class="e-my-point">
			<div class="e-my-point-item">
				<span>0份</span>
				<i class="fa fa-chevron-right"></i>
				<p>商品消费码</p>
			</div>
			<div class="e-my-point-item">
				<span>0份</span>
				<i class="fa fa-chevron-right"></i>
				<p>PASS专享通</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		components:{
		},
		name: 'index',
		data () {
			return {
			}
		}
	}
</script>

<style scoped lang="less">
	.e-my{
		width: 100%;
		background: #ddd;
		min-height: 100%;
		color: #fff;
		.e-my-top{
			text-align: center;
			background: #1a1a1a;
			padding: 20px 0 30px 0;
			p{
				margin: 0;
			}
			.e-my-info{
				img{
					border: 1px solid #fff;
					border-radius: 50%;
					width: 60px;
					height: 60px;
				}
			}
		}
		.e-my-point{
			background: #fff;
			color: #bebfc3;
			font-weight: bold;
			border-bottom: 1px solid #bebfc3;
			height: 50px;
			padding: 20px;
			.e-my-point-item{
				width: 49%;
				float: left;
				height: 45px;
				i{
				}
			}
			.e-my-point-item:last-child{
				border-left: 1px solid #bebfc3;
				span, p{
					margin-left: 20px;
				}
			}
		}
	}
</style>