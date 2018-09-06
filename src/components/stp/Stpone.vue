<template>
	<ul>
		<h3 style="background: #13D8EBFF;">
			<i class="fa fa-vcard-o"></i>经办信息
		</h3>
		<li style="margin-top: 20px;">
			<div class="tips">
				<span>*</span>退费日期
			</div>
			<div class="fun">
				<input type="date">
			</div>
		</li>
		<li>
			<div class="tips">
				退费原因
			</div>
			<div class="fun">
				<select name="" id="">
					<option value="">请选择</option>
				</select>
			</div>
		</li>
		<li>
			<div class="tips">
				备注
			</div>
			<div class="fun">
				<input type="text" placeholder="请输入">
			</div>
		</li>
	</ul>
</template>
<script>
export default{
	name:'Stpone',
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
	display: inline-block;
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
select{
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