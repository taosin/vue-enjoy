<template>
	<div class="e-index">
		<div class="e-top">
			<div class="e-top-t">
				<span>ENJOY</span>
				<i class="fa fa-search"></i>
			</div>
			<div class="e-px"></div>
		</div>
		<div class="e-main">
			<!-- 今日推荐 -->
			<div class="e-today">
				<div class="e-today-top">
					<p>
						<span>今日推荐</span>
						<span>1</span>
						<span>/7</span>
					</p>
					<p>每天告诉你大家爱吃的和最近值得吃的</p>
				</div>
				<div class="e-today-swiper">
					<div class="e-today-items">
						<div class="e-today-item" v-for="today in todays">
							<img :src="today.img">
							<p>{{today.type}}</p>
							<p>{{today.title}}</p>
							<p>{{today.desc}}</p>
						</div>
					</div>
				</div>
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
				todays:[
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐、欠揍双人餐等立减30！', type:'今日福利' }
				]
			}
		}
	}
</script>

<style scoped lang="less">
	.e-index{
		width: 100%;
		.e-top{
			position: fixed;
			height: 40px;
			width: 100%;
			background: #fff;
			z-index: 999;
			.e-top-t{
				width: 100%;
				text-align: center;
				padding: 10px 0;
				font-size: 14px;
				font-weight: bold;
				i{
					position: absolute;
					right: 10px;
				}
			}
		}
		.e-main{
			top: 40px;
			padding: 40px 0;
			width: 100%;
			overflow-x: auto;
			.e-today{
				padding: 10px;
				clear: both;
				.e-today-swiper{
					.e-today-items{
						.e-today-item{
							font-size: 10px;
							float: left;
							margin-right: 10px;
							img{
								width: 100%;
							}
						}
					}
				}
			}
		}
	}
</style>