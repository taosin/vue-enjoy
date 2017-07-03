<template>
	<div class="e-magazine">
		<div class="e-top">
			<div class="e-top-t">
				ENJOY慢用
			</div>
			<div class="e-px"></div>
		</div>
		<div class="e-main">
			<div class="e-main-title">
				<span>·一点关于人生的吃喝经验·</span>
			</div>
			<div class="e-main-content">
				<div class="lists">
					<div class="list" v-for="data in datas">
						<img :src="data.img">
						<div class="desc">
							<p class="author">via {{data.author}}</p>
							<p class="title">{{data.title}}</p>
							<p class="date">{{data.date}}</p>
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
		name: 'magazine',
		mounted(){
		},
		data () {
			return {
				show:false,
				datas:[
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'这家不起眼的小酒馆 竟然还是个“两面派”', date:'15小时前更新', author:'FY微醺札记 | 沪上居酒屋达人  深夜食堂重度爱好者' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'这家不起眼的小酒馆 竟然还是个“两面派”', date:'15小时前更新', author:'FY微醺札记 | 沪上居酒屋达人  深夜食堂重度爱好者' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'这家不起眼的小酒馆 竟然还是个“两面派”', date:'15小时前更新', author:'FY微醺札记 | 沪上居酒屋达人  深夜食堂重度爱好者' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'这家不起眼的小酒馆 竟然还是个“两面派”', date:'15小时前更新', author:'FY微醺札记 | 沪上居酒屋达人  深夜食堂重度爱好者' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'这家不起眼的小酒馆 竟然还是个“两面派”', date:'15小时前更新', author:'FY微醺札记 | 沪上居酒屋达人  深夜食堂重度爱好者' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'这家不起眼的小酒馆 竟然还是个“两面派”', date:'15小时前更新', author:'FY微醺札记 | 沪上居酒屋达人  深夜食堂重度爱好者' }
				]
			}
		},
		methods:{
			focusShow(){
				this.show = true;
			}
		}
	}
</script>

<style scoped lang="less">
	.e-magazine{
		width: 100%;
		.e-top{
			position: fixed;
			height: 40px;
			width: 100%;
			background: #fff;
			z-index: 999;
			.e-top-t{
				text-align: center;
				padding: 10px;
				font-weight: bold;
				font-size: 14px;
			}
		}
		.e-main{
			position: absolute;
			top: 44px;
			left: 0;
			bottom: 40px;
			right: 0;
			.e-main-title{
				width: 100%;
				text-align: center;
				-webkit-transform: scale(0.8, 0.8);
				-ms-transform: scale(0.8, 0.8);
				-o-transform: scale(0.8, 0.8);
				transform: scale(0.8, 0.8);
				span{
					color: #888;
					font-size: 10px;
				}
			}
			.e-main-content{
				padding: 10px 20px;
				.lists{
					width: 100%;
					.list{
						margin-bottom: 10px;
						img{
							width: 100%;
						}
						.desc{
							padding: 0 5px;
							.author{
								margin: 0;
								font-size: 10px;
								color: #888;
								-webkit-transform: scale(0.8, 0.8);
								-ms-transform: scale(0.8, 0.8);
								-o-transform: scale(0.8, 0.8);
								transform: scale(0.8, 0.8);
								margin-left: -10%;
							}
							.title{
								font-size: 16px;
								font-weight: bold;
								margin: 5px 0 0 0;
							}
							.date{
								margin: 5px 0 0 0;
								color: red;
								-webkit-transform: scale(0.8, 0.8);
								-ms-transform: scale(0.8, 0.8);
								-o-transform: scale(0.8, 0.8);
								transform: scale(0.8, 0.8);
								margin-left: -10%;
							}
						}
					}
				}
			}
		}
	}
</style>