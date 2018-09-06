<template>
	<ul style="margin-right: 0">
		<h3 style="background: #DD3821FF;">
			<i class="fa fa-cc-diners-club"></i>退款账户
		</h3>
		<li style="margin-top: 30px;">
			<div class="tips">
				<input type="checkbox" checked @click="pose">
			</div>
			<div class="fun" style="width: 200px;text-align: left;">
				<i class="fa fa-cny" style="color: #E39C1BFF;"></i>现金
			</div>
		</li>
		<li v-show="ok">
			<div class="tips">
			</div>
			<div class="fun" style="width: 200px;color: red;">
				<input type="text" value="0.00" style="text-align: right;padding-right: 10px;">
			</div>
		</li>
	</ul>
</template>
<script>
export default{
	name:'Stpthree',
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
input{
	width: 200px;
	box-sizing: border-box;
	height: 30px;
	border-radius: 5px;
	padding-left: 10px;
	border: 1px solid #ccc;
}
span{
	color: red;
}
input[type=checkbox]{
	width: 80px;
	height: 20px;
	position: absolute;
	margin-top: -16px;
	margin-left: -38px;
}
</style>