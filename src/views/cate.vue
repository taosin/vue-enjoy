<template>
	<div class="e-cate">
		<div class="e-top">
			<div class="e-top-t">
				<div class="e-top-i" :class="{foucs: show}">
					<i class="fa fa-search"></i>
					<input type="text" placeholder="请输入商品名、商家、商圈、分类" @focus="focusShow">
				</div>
				<a v-show="show" @click="show=false" class="e-cancel">取消</a>
			</div>
			<div class="e-px"></div>
		</div>
		<div class="e-main">
			<div class="e-content">
				<div class="first-cate">
					<ul>
						<li v-for="menu in menus"><a :href="'##'+ menu.value">{{menu.text}}</a></li>
					</ul>
				</div>
				<div class="second-cate">
					<div class="second-cate-items">
						<div class="second-cate-item" v-for="n in 6" id="0">
							<p class="second-cate-title">热门</p>
							<img src="http://orj0e0gb4.bkt.clouddn.com/img_1.png">
							<p class="second-cate-name">{{remen[n-1]}}</p>
						</div>
						<div class="second-cate-item" v-for="n in 6" name="1">
							<p class="second-cate-title">热门</p>
							<img src="http://orj0e0gb4.bkt.clouddn.com/img_1.png">
							<p class="second-cate-name">{{remen[n-1]}}</p>
						</div>
						<div class="second-cate-item" v-for="n in 6" name="2">
							<p class="second-cate-title">热门</p>
							<img src="http://orj0e0gb4.bkt.clouddn.com/img_1.png">
							<p class="second-cate-name">{{remen[n-1]}}</p>
						</div>
						<div class="second-cate-item" v-for="n in 6" name="3">
							<p class="second-cate-title">热门</p>
							<img src="http://orj0e0gb4.bkt.clouddn.com/img_1.png">
							<p class="second-cate-name">{{remen[n-1]}}</p>
						</div>
						<div class="second-cate-item" v-for="n in 6" name="4">
							<p class="second-cate-title">热门</p>
							<img src="http://orj0e0gb4.bkt.clouddn.com/img_1.png">
							<p class="second-cate-name">{{remen[n-1]}}</p>
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
		name: 'cate',
		mounted(){
		},
		data () {
			return {
				show:false,
				menus:[
				{ text:'热门', value:'0' },
				{ text:'精选餐厅', value:'1' },
				{ text:'本地生活', value:'2' },
				{ text:'良好物品', value:'3' },
				{ text:'优选美酒', value:'4' },
				{ text:'好味食品', value:'5' },
				{ text:'咖啡和茶', value:'6' }
				],
				remen:[ '自助餐', '西餐', '咖啡甜点', '日用家电', '果娘', '方便速食' ]
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
	.e-cate{
		width: 100%;
		.e-top{
			position: fixed;
			height: 40px;
			width: 100%;
			background: #fff;
			z-index: 999;
			.e-top-t{
				padding: 10px;
				font-size: 14px;
				font-weight: bold;
				.e-top-i{
					background: #f0f0f0;
					padding:2px 5px;
					border-radius: 4px;
					width: 95%;
					transition: width .2s;
					input{
						background:initial;
						border: none;
						width: 90%;
					}
					input:focus{
						outline: none;
					}
				}
				.e-top-i.foucs {
					width: 85% !important;
				}
				.e-cancel{
					font-size: 14px;
					color: #888;
					transition: .8s;
					position: absolute;
					right: 10px;
					top: 12px;
				}
			}
		}
		.e-main{
			position: absolute;
			top: 44px;
			left: 0;
			bottom: 40px;
			right: 0;
			.e-content{
				.first-cate{
					position: absolute;
					top: 0;
					width: 30%;
					bottom:0;
					background:#f6f6f6;
					ul{
						list-style: none;
						padding: 0;
						margin: 0;
						li{
							text-align: center;
							padding: 10px;
						}
					}
				}
				.second-cate{
					position: absolute;
					right: 0;
					left: 30%;
					top: 0px;
					bottom: 0px;
					padding: 10px;
					overflow-y: auto;
					-webkit-overflow-scrolling : touch;
					.second-cate-items{
						p{
							margin: 0;
						}
						.second-cate-title{

						}
						.second-cate-item{
							width: 33%;
							float: left;
							text-align: center;
							margin: 15px 0 0px 0;
							img{
								width: 80%;
							}
							.second-cate-name{
								margin: 2px 0;
								color: #888;
								font-size: 10px;
							}
						}
					}
				}
			}
		}
	}
</style>