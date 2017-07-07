<template>
	<div class="e-my-bg">
		
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
				<i class="fa fa-chevron-right first-i"></i>
				<p>{{pCode}}</p>
			</div>
			<div class="epx"></div>
			<div class="e-my-point-item">
				<span>0份</span>
				<i class="fa fa-chevron-right second-i"></i>
				<p>{{pass}}</p>
			</div>
		</div>
		<div class="exp"></div>
		<div class="exp" style="margin-top:10px"></div>
		<div class="my-orders">
			<div class="my-order-header">
				<span>{{myOder}}</span>
				<a>{{checkAllOrder}} <i class="fa fa-chevron-right first-i"></i></a>
			</div>
			<div class="exp"></div>
			<div class="my-order-main">
				<ul>
					<li v-for="cate in orderCates">
						<img :src="'../../static/img/'+cate.icon+'.png'">
						<p>{{cate.text}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="exp"></div>
		<div class="exp" style="margin-top:10px"></div>
		<div class="my-items">
			<div class="item">
				<span>邀请好友</span>
				<a>各得50元礼券<i class="fa fa-chevron-right first-i"></i></a>
			</div>
			<div class="exp"></div>
			<div class="item">
				<span>我的礼券</span>
				<a>1张可用礼券<i class="fa fa-chevron-right first-i"></i></a>
			</div>
			<div class="exp"></div>
			<div class="item">
				<span>我喜欢的商品</span>
				<a><i class="fa fa-chevron-right first-i"></i></a>
			</div>
		</div>
		<div class="exp"></div>
		<div class="exp" style="margin-top:10px"></div>
		<div class="my-items">
			<div class="item">
				<span>设置</span>
				<a><i class="fa fa-chevron-right first-i"></i></a>
			</div>
			<div class="exp"></div>
			<div class="item">
				<span>用户协议</span>
				<a><i class="fa fa-chevron-right first-i"></i></a>
			</div>
			<div class="exp"></div>
			<div class="item">
				<span>联系我们</span>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	import './../../static/css/my.scss';
	export default {
		components:{
		},
		name: 'index',
		data () {
			return {
				pCode:'商品消费码',
				pass:'PASS专享通',
				myOder:'我的订单',
				checkAllOrder:'查看全部订单',
				orderCates:[
				{ text:'未使用', icon:'i-w-use', url:'' },
				{ text:'待发货', icon:'i-w-sent', url:'' },
				{ text:'待收货', icon:'i-w-recive', url:'' },
				{ text:'待反馈', icon:'i-w-note', url:'' },
				{ text:'退款', icon:'i-w-back', url:'' }
				]
			}
		}
	}
</script>
