<template>
	<div class="cool">
		<ul>
			<h3 style="background: #13D8EBFF;">
				<i class="fa fa-vcard-o"></i>经办信息
			</h3>
			<li style="margin-top: 30px;">
				<div class="tips">
					<span>*</span>收费日期
				</div>
				<div class="fun">
					<input type="date" class="p">
				</div>
			</li>
			<li>
				<div class="tips">
					<span>*</span>收费类型
				</div>
				<div class="fun">
					<select name="" id="" class="p">
						<option value="">请选择</option>
					</select>
				</div>
			</li>
			<li>
				<div class="tips">
					发票编号
				</div>
				<div class="fun">
					<input type="text" placeholder="请输入" class="p">
				</div>
			</li>
			<li>
				<div class="tips">
					业绩归属人
				</div>
				<div class="fun" style="position: relative;">
					<input type="text" class="np">
					<button class="nb"><i class="fa fa-ellipsis-h"></i></button>
				</div>
			</li>
			<li>
				<div class="tips">
					备注
				</div>
				<div class="fun">
					<input type="text" placeholder="限20字" class="p">
				</div>
			</li>
		</ul>
		<ul style="margin-right: 0;">
			<h3 style="background: #F0CA0EFF;">
				<i class="fa fa-cc-mastercard"></i>结算
			</h3>
			<li style="margin-top: 140px;">
				<div class="tips">
					发票编号
				</div>
				<div class="fun">
					<input type="text" value="0" class="p" style="text-align: right;color: red;padding-right: 10px;">
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:'Enrolltips',
	data(){
		return{
			tq:'ddd'
		}
	}
}	
</script>
<style scoped>
.cool:after{
	content: '';
	display: block;
	width: 0;
	height: 0;
	clear: both;
}
.cool{
	min-height: 480px;
}
ul{
	width: 49%;
	float: left;
	margin-right: 1%;
	border: 1px solid #ccc;
	height: 400px;
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
	font-size: 0;
}
span{
	color: red;
}
.p{
	width: 280px;
	box-sizing: border-box;
	height: 30px;
	border-radius: 5px;
	padding-left: 10px;
	border: 1px solid #ccc;
}
.np{
	width: 250px;
	box-sizing: border-box;
	height: 30px;
	border-radius: 5px 0 0 5px;
	padding-left: 10px;
	border: 1px solid #ccc;
	display: inline-block;
	border-right: 0;
}
.nb{
	width: 30px;
	box-sizing: border-box;
	height: 30px;
	border-radius: 0 5px 5px 0;
	padding-left: 10px;
	border: 1px solid #ccc;
	display: inline-block;
	color: #999;
	background: #eee;
}
</style>