<template>
	<ul>
		<li>
			<div class="name">
				上课老师
			</div>
			<div class="fun">
				<InputBox style="position: absolute;margin-top: -20px;"></InputBox>
				<div class="free">查看空余时间</div>
			</div>
		</li>
		<li>
			<div class="name">
				助教
			</div>
			<div class="fun">
				<div class="free">查看空余时间</div>
				<InputBox style="position: absolute;margin-top: -20px;"></InputBox>
			</div>
		</li>
		<li>
			<div class="name">
				上课时段
			</div>
			<div class="fun">
				<InputBox style="position: absolute;margin-top: -20px;"></InputBox>
			</div>
		</li>
	</ul>
</template>
<script>
import InputBox from './InputBox.vue'
export default{
	name:'GoClassInfo',
	components:{
		InputBox
	}
}
</script>
<style scoped>
li{
	line-height: 40px;
	margin-bottom: 10px;
}
.name{
	width: 120px;
	text-align: right;
	margin-right: 15px;
	display: inline-block;
}
span{
	color: red;
}
.fun{
	display: inline-block;
}
input{
	padding-left: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	height: 30px;
	width: 300px;
}
select{
	padding-left: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	height: 30px;
	width: 312px;
}
.bo{
	display: inline-block;
	position: absolute;
	margin-top: -2px;
}
.free{
	display: inline-block;
	border: 1px solid #3673FF;
	position: absolute;
	border-radius: 5px;
	margin-top: -20px;
	margin-left: 330px;
	padding: 0 10px;
	height: 30px;
	color: #3673FF;
	line-height: 30px;
	cursor: pointer;
	background: #EDF2FF;
}
.free:hover{
	background: #3673FF;
	color: #fff;
}
</style>