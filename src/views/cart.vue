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
						<div class="select">
							<div class="select-div" :class="selected?'select-div-seleted':''" @click="selected=!selected">
								<p></p>
							</div>
						</div>
						<div class="img">
							<img :src="data.img">
						</div>
						<div class="desc">
							<p class="author">{{data.name}}</p>
							<p class="title">规格：{{data.type}}</p>
							<p class="date">单价：{{data.price}} 元</p>
							<p class="counts">
								<a class="count increase">-</a>
								<span>{{data.nums}}</span>
								<a class="count decrease">+</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- 更多推荐 -->
			<div class="e-more">
				<h2>--- 更多推荐 ---</h2>
				<div class="main">
					<div class="items">
						<div class="item" v-for="data in datas">
							<img :src="data.img">
							<div class="desc">
								<div class="name">
									<p class="title">{{data.name}}</p>
								</div>
								<p class="unit">{{data.price}}元/件</p>
							</div>
						</div>
					</div>
				</div>
				<div class="clear">
				</div>
			</div>
		</div>

		<div class="e-check">
			<div class="select">
				<div class="select-div" :class="selected?'select-div-seleted':''" @click="selected=!selected">
					<p></p>
				</div>
			</div>
			<span>全选</span>
			<div class="right">
				<span>合计：675元</span>
				<a class="submit">去结算</a>
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
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯马克杯马克杯马克杯马克杯马克杯', price:29, type:'星球款', nums:1 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:4 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:5 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:3 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:1 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:5 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:3 },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', name:'Saturnbird 马克杯', price:29, type:'星球款', nums:1 }
				],
				selected:false
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
			position: fixed;
			top: 40px;
			left: 0;
			bottom:95px;
			right: 0;
			background-color: #f6f6f6;
			overflow-y:auto; 
			-webkit-overflow-scrolling : touch;
			.e-main-content{
				.lists{
					width: 100%;
					.list{
						background: #fff;
						margin-bottom: 10px;
						padding:10px;
						height: 80px;
						.select{
							width: 28px;
							float: left;
							// height: 70px;
							padding-top: 35px;
						}
						.img{
							width: 120px;
							float: left;
							img{
								width: 100%;
								height: 80px;
							}
						}
						.desc{
							padding: 0 5px;
							float: left;
							position: absolute;
							right: 0;
							height: 70px;
							left: 165px;
							.author{
								margin: 0;
								font-size: 10px;
								font-weight: bold;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							.title{
								margin: 0px 0 0 0;
								color: #888;
								font-size: 10px;
								-webkit-transform: scale(0.8, 0.8);
								-ms-transform: scale(0.8, 0.8);
								-o-transform: scale(0.8, 0.8);
								transform: scale(0.8, 0.8);
								margin-left: -11%;

							}
							.date{
								margin: 0px 0 0 0;
								color: red;
								-webkit-transform: scale(0.8, 0.8);
								-ms-transform: scale(0.8, 0.8);
								-o-transform: scale(0.8, 0.8);
								transform: scale(0.8, 0.8);
								margin-left: -11%;
							}
							.counts{
								margin: 5px 0 0 0;
								span{
									padding: 5px;
									font-size: 16px;
								}
								.count{
									border: 1px solid #ddd;
									padding: 2px 8px;
									color: #ddd;
									font-size: 16px;
								}
							}
						}
					}
				}
			}
			.e-more{
				padding: 10px;
				text-align: center;
				background-color: #fff;
				h2{
					margin: 5px 0 10px 0;
				}
				.main{
					.items{
						.item{
							text-align: center;
							float: left;
							width: 50%;
							margin: 5px 0;
							img{
								width:95%;
							}
							.desc{
								text-align: left;
								padding-left: 5px;
								p{
									margin: 0;
								}
								.name{
									height: 45px;
									.title{
										font-weight: bold;
										font-size: 14px;
									}
								}
								.unit{
									color: red;
								}
							}
						}
					}
				}
			}
		}
		.e-check{
			position: fixed;
			bottom: 40px;
			left: 0;
			right: 0;
			border-top: 1px solid #888;
			background-color: #fff;
			padding: 15px 10px 17px 10px;
			span{
				margin-left: 10px;
				font-size: 16px;
			}
			.right{
				float: right;
				width: 70%;
				text-align: right;
				span{
					margin: 0 10px 0 0;
					color: red;
					font-weight: bold;
					font-size: 14px;
				}
				.submit{
					padding: 8px 20px;
					background-color: red;
					color: #fff;
					font-size: 16px;
					border-radius: 5px;
				}
			}
		}
		.select-div{
			width: 17px;
			height: 17px;
			border: 1px solid #888;
			border-radius: 50%;
			float: left;
		}
		.select-div-seleted{
			width: 19px;
			height: 19px;
			background-color: red;
			border: none;
			p{
				margin: 0;
				width: 8px;
				height: 13px;
				border: 2px solid #fff;
				border-top: none;
				border-left: none;
				transform:rotate(37deg);
				-ms-transform:rotate(37deg); 	/* IE 9 */
				-moz-transform:rotate(37deg); 	/* Firefox */
				-webkit-transform:rotate(40deg); /* Safari 和 Chrome */
				-o-transform:rotate(37deg);
				margin-left: 4px;
				margin-top: 1px;
			}
		}
	}
	.clear{ clear:both}
</style>