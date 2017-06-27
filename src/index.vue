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
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐、欠揍双人餐等立减30！', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐、欠揍双人餐等立减30！', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐、欠揍双人餐等立减30！', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐、欠揍双人餐等立减30！', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐、欠揍双人餐等立减30！', type:'今日福利' },
				{ img:'http://orj0e0gb4.bkt.clouddn.com/img_1.png', title:'最高立减30元！周三的福利现在就有！', desc:'浦东香格里拉翡翠36单人晚餐、欠揍双人餐等立减30！', type:'今日福利' }
				],
				initialSlide:0
			}
		},
		mounted(){
			this.initSwiper();
		},
		methods:{
			initSwiper(){
				const self = this;
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					slidesPerView: 1.1,
					centeredSlides: true,
					paginationClickable: true,
					spaceBetween: 10,
					slidesOffsetBefore : 6,
					onTransitionEnd: function(swipers){
						self.initialSlide = swipers.activeIndex + 1
					}
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
			top: 40px;
			padding: 30px 0;
			width: 100%;
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
				.e-today-swiper{
					margin-top: -5px;
					text-align: center;
					.swiper-container {
						width: 100%;
						margin: 0 auto;
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
								font-size: 7pt;
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
			}
		}
	}
</style>