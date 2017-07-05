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
					<p class="e-today-top-p">
						<span>今日推荐</span>
						<span class="e-today-top-p-span"> {{initialSlide}}
							<span class="e-today-top-p-span-span">/{{todays.length}}</span>
						</span>
					</p>
					<p class="e-today-top-desc">每天告诉你大家爱吃的和最近值得吃的</p>
				</div>
				<div class="e-today-swiper">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="today in todays">
								<div class="swiper-slide-div">
									<img :src="today.img">
									<p class="topic">{{today.type}}</p>
									<p class="title">{{today.title}}</p>
									<p class="desc">{{today.desc}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style="padding:0 20px;margin-top:10px">
					<div class="index-e-px">
					</div>
				</div>
			</div>
			<!-- 分类图标 -->
			<div class="index-cates">
				<h5>懂吃、会选、有格调</h5>
				<div class="cate-main">
					<ul>
						<li v-for="type in types">
							<img :src="type.img">
							<p>{{type.name}}</p>
						</li>
					</ul>
				</div>
			</div>
			<div style="padding:0 20px;margin-top:10px">
				<div class="index-e-px">
				</div>
			</div>
			<!-- 刀叉新闻 -->
			<div class="index-news">
				<h4>刀叉新闻：开张啦！一入豪门深似海</h4>
			</div>
			<div style="padding:0 20px;margin-top:10px">
				<div class="index-e-px">
				</div>
			</div>
			<!-- 今日特卖 -->
			<div class="today-sales">
				<div class="sale-item">
					<div class="left">
						<p>今日特卖</p>
						<p class="desc">增值折扣每日放松</p>
					</div>
					<img src="http://orj0e0gb4.bkt.clouddn.com/img_1.png">
				</div>
				<div class="sale-item">
					<div class="left">
						<p>福利中心</p>
						<p class="desc">天天来抢券 下单更便宜</p>
					</div>
					<img src="http://orj0e0gb4.bkt.clouddn.com/img_1.png">
				</div>
			</div>
			<div style="padding:0 20px;">
				<div class="index-e-px">
				</div>
			</div>
			<!-- 新人专区 -->
			<div class="e-today">
				<div class="e-today-top">
					<p class="e-today-top-p">
						<span>新人专区</span>
						<span class="e-today-top-p-span"> {{initialSlide2}}
							<span class="e-today-top-p-span-span">/{{gifts.length}}</span>
						</span>
					</p>
					<p class="e-today-top-desc">给新朋友的见面礼遇：专享礼券和特价拼车</p>
				</div>
				<div class="e-today-swiper">
					<div class="swiper-container2">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="today in gifts">
								<div class="swiper-slide-div">
									<img :src="today.img">
									<p class="topic">{{today.type}}</p>
									<p class="title">{{today.title}}</p>
									<p class="desc">{{today.desc}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style="padding:0 20px;margin:10px 0">
				<div class="index-e-px">
				</div>
			</div>
			<!-- banner -->
			<div class="e-banner">
				<div class="e-today-swiper">
					<div class="swiper-container3">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="today in gifts">
								<div class="swiper-slide-div">
									<img :src="today.img">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style="padding:0 20px;margin-top:0px">
				<div class="index-e-px">
				</div>
			</div>
			<!-- 上海新味 -->
			<div class="e-today">
				<div class="e-today-top">
					<p class="e-today-top-p">
						<span>上海新味</span>
						<span class="e-today-top-p-span"> {{initialSlide2}}
							<span class="e-today-top-p-span-span">/{{gifts.length}}</span>
						</span>
					</p>
					<p class="e-today-top-desc">给新朋友的见面礼遇：专享礼券和特价拼车</p>
				</div>
				<div class="e-today-swiper">
					<div class="swiper-container4">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="today in gifts">
								<div class="swiper-slide-div">
									<img :src="today.img">
									<p class="topic">{{today.type}}</p>
									<p class="title">{{today.title}}</p>
									<p class="desc">{{today.desc}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style="padding:0 20px;margin:10px 0">
				<div class="index-e-px">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	require('./../static/libs/swiper.min.css');
	require('./../static/libs/swiper.min.js');
	export default {
		components:{
		},
		name: 'index',
		data () {
			return {
				todays:[
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' }
				],
				initialSlide:0,
				initialSlide2:0,
				types:[
				{ name:'精选餐厅', img:'' },
				{ name:'挑美酒', img:'' },
				{ name:'找好物', img:'' },
				{ name:'优选食品', img:'' },
				{ name:'咖啡和茶', img:'' },
				],
				gifts:[
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐!', type:'今日福利' }
				]
			}
		},
		mounted(){
			this.initSwiper();
		},
		methods:{
			initSwiper(){
				const self = this;
				var swiper = new Swiper('.swiper-container', {
					slidesPerView: 1.1,
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 10,
					slidesOffsetBefore : 0,
					onTransitionEnd: function(swipers){
						self.initialSlide = swipers.activeIndex + 1
					}
				});
				var swiper2 = new Swiper('.swiper-container2', {
					slidesPerView: 1.1,
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 10,
					slidesOffsetBefore : 0,
					onTransitionEnd: function(swipers){
						self.initialSlide2 = swipers.activeIndex + 1
					}
				});
				var swiper3 = new Swiper('.swiper-container3', {
					slidesPerView: 1.1,
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 10,
					slidesOffsetBefore : 0,
					onTransitionEnd: function(swipers){
						self.initialSlide2 = swipers.activeIndex + 1
					}
				});
				var swiper4 = new Swiper('.swiper-container4', {
					slidesPerView: 2.1,
					paginationClickable: true,
					spaceBetween: 10,
					slidesOffsetBefore : 10,
					slidesOffsetAfter : 10,
					freeMode: true
				});
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
			top: 0px;
			padding: 30px 0;
			overflow-y:auto; 
			-webkit-overflow-scrolling : touch;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			.e-today{
				clear: both;
				.e-today-top{
					padding: 10px 20px;
					.e-today-top-p{
						font-size: 16px;
						font-weight: bold;
						.e-today-top-p-span{
							float: right;
							.e-today-top-p-span-span{
								font-size: 12px;
								color: #888;
							}
						}
					}
					.e-today-top-desc{
						margin-top: -15px;
						font-size: 7pt;
						color: #888;
					}
				}
			}
			.e-today-swiper{
				margin-top: -5px;
				text-align: center;
				.swiper-container {
					width: 100%;
					margin: 0 auto;
				}
				.swiper-container2 {
					width: 100%;
					margin: 0 auto;
					overflow: hidden;
				}
				.swiper-container3 {
					width: 100%;
					margin: 0 auto;
					overflow: hidden;
				}
				.swiper-container4 {
					width: 100%;
					margin: 0 auto;
					overflow: hidden;
				}
				.swiper-slide {
					text-align: center;
					background: #fff;
					width: 90%;
					display: -webkit-box;
					display: -ms-flexbox;
					display: -webkit-flex;
					display: flex;
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					-webkit-justify-content: center;
					justify-content: center;
					-webkit-box-align: center;
					-ms-flex-align: center;
					-webkit-align-items: center;
					align-items: center;
					.swiper-slide-div{
						text-align: left;
						img{
							width: 100%;
							text-align: center;
							clear: both;
							margin-bottom: 10px;
						}
						p{
							clear: both;
							padding: 0;
							margin: 0;
						}
						.topic{
							color: red;
							font-size: 10px;
						}
						.title{
							color: #333;
							font-weight: bold;
							font-size: 10pt;
						}
						.desc{
							color: #888;
							font-size: 1em;
						}
					}
				}
				.swiper-slide:nth-child(2n) {
					width: 90%;
				}
				.swiper-slide:nth-child(3n) {
					width: 90%;
				}
			}
			.index-cates{
				padding: 0 10px;
				text-align: center;
				.cate-main{
					min-height: 30px;	
					ul{
						list-style: none;
						padding: 0;
						li{
							float: left;
							width: 20%;
							-webkit-transform: scale(0.8, 0.8);
							-ms-transform: scale(0.8, 0.8);
							-o-transform: scale(0.8, 0.8);
							transform: scale(0.8, 0.8);
						}
					}
				}
			}
			.today-sales{
				padding: 10px 20px;
				height: 60px;
				.sale-item{
					float: left;
					width: 48%;
					.left{
						width: 50%;
						float: left;
						.desc{
							color: #888;
							margin: 0;
						}
					}
					img{
						width: 40%;
						float: right;
						height: 60px;
					}
					p{
						margin: 0;
						margin-top: 5px;
						-webkit-transform: scale(0.8, 0.8);
						-ms-transform: scale(0.8, 0.8);
						-o-transform: scale(0.8, 0.8);
						transform: scale(0.8, 0.8);
					}
				}
			}
			.index-news{
				padding: 0px 20px;
			}
			.e-banner{
				// padding: 0px 20px;
				img{
					width: 100%;
					height: 100px;
				}
			}
		}
		.index-e-px{
			content: "";
			width: 200%;
			border-top: 1px solid #8d8d8d;
			border-radius:0px;
			-webkit-transform-origin: 0 0;
			-moz-transform-origin: 0 0;
			-ms-transform-origin: 0 0;
			-o-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scale(0.5, 0.5);
			-ms-transform: scale(0.5, 0.5);
			-o-transform: scale(0.5, 0.5);
			transform: scale(0.5, 0.5);
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}
	}
</style>