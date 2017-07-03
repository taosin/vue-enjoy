<template>
	<div class="e-cart">
		<div class="e-top">
			<div class="e-top-t">
				<span>购物车</span>
				<a>编辑</a>
			</div>
			<div class="e-px"></div>
		</div>
		<div class="e-main">
			<div class="e-main-content">
				<div class="lists">
					<div class="list" v-for="data in datas">
						<span></span>
						<div class="img">
							<img :src="data.img">
						</div>
						<div class="desc">
							<p class="author">{{data.author}}</p>
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
		name: 'cart',
		mounted(){
		},
		data () {
			return {
				show:false,
				datas:[
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:2 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:1 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:4 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:5 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:3 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:1 }
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
	.e-cart{
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
				font-size: 14px;
				a{
					float: right;
				}
			}
		}
		.e-main{
			position: absolute;
			top: 40px;
			left: 0;
			bottom: 33px;
			right: 0;
			background-color: #f6f6f6;
			overflow-y:auto; 
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
				.lists{
					width: 100%;
					.list{
						background: #fff;
						margin-bottom: 10px;
						padding:10px;
						height: 70px;
						span{
							content: '\EA01';
							color: #c9c9c9;
							font-size: 23px;
						}
						.img{
							width: 40%;
							float: left;
							img{
								width: 100%;
								height: 70px;
							}
						}
						.desc{
							padding: 0 5px;
							float: left;
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