<template>
	<ul>
		<h3 style="background: #F0CA0EFF;">
			<i class="fa fa-cc-mastercard"></i>结算
		</h3>
		<li style="margin-top: 30px;">
			<div class="tips">
				合计
			</div>
			<div class="fun" style="width: 200px;">
				0.00
			</div>
		</li>
		<li>
			<div class="tips">
				实退金额
			</div>
			<div class="fun" style="width: 200px;color: red;">
				0.00
			</div>
		</li>
	</ul>
</template>
<script>
export default{
	name:'Stptwo',
	data(){
		return{
			ok:true
		}
	},
	methods:{
		pose(){
			this.ok = !this.ok
		}
	}
}
</script>
<style scoped>
ul{
	width: 100%;
	border: 1px solid #ccc;
	height: 220px;
}
h3{
	color: #fff;
	padding: 12px 20px;
	font-size: 14px;
	font-weight: normal;
}
i{
	margin-right: 5px;
}
li{
	line-height: 40px;
	text-align: center;
	margin-bottom: 10px;
}
.tips{
	display: inline-block;
	text-align: right;
	margin-right: 10px;
	width: 80px;
}
.fun{
	display: inline-block;
}
</style>