<template>
	<div>
		<ul class="cool">
			<li>
				<span>*</span>姓名
				<input type="text" :placeholder="tq" class="p">
				<button><i class="fa fa-user-plus"></i></button>
			</li>
			<li>
				<span>*</span>手机号
				<input type="text" :placeholder="tq" class="p">
				<button><i class="fa fa-user-plus"></i></button>
			</li>
			<li>
				<span>*</span>性别
				<input type="radio" name="sex">男
				<input type="radio" name="sex">女
			</li>
			<li>
				<div style="float: left;"><span>*</span>师生信账号</div>
				<input type="text" :placeholder="tq" class="pl1">
				<input type="text" value="@tq" class="pl2" disabled>
			</li>
			<li>
				<a href=""><i class="fa fa-pencil-square-o"></i>填写更多信息</a>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:'Enrollinfo',
	data(){
		return{
			tq:'请输入'
		}
	}
}
</script>
<style scoped>
.cool:after{
	content: '';
	width: 0;
	height: 0;
	clear: both;
	display: block;
}
span{
	color: red;
}
li{
	float: left;
	margin-right: 30px;
	line-height: 30px;
}
input[type=text]{
	padding:6px 10px;
	border: 1px solid #ccc;
}
input[type=radio]{
	margin:0 5px 0 10px;
}
button{
	padding: 6px 20px;
	border-radius: 5px;
	border: 1px solid #3673FF;
	color: #fff;
	background: #3672ff;
}
.p{
	margin-left: 15px;
	border-radius: 5px;
}
.pl1{
	float: left;
	width: 160px;
	margin-left:15px;
	border-radius: 5px 0 0 5px;
}
.pl2{
	float: left;
	width: 80px;
	border-left: 0;
	border-radius: 0 5px 5px 0;
}
a{
	color: #0068b7;
}
</style>