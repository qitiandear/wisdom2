<template>
	<ul>
		<li>
			<div class="name">
				<span>*</span>课程
			</div>
			<div class="fun">
				<InputBox style="position: absolute;margin-top: -20px;"></InputBox>
			</div>
		</li>
		<li>
			<div class="name">
				<span>*</span>班级名称
			</div>
			<div class="fun">
				<input type="text" placeholder="请输入">
			</div>
		</li>
		<li>
			<div class="name">
				默认教室
			</div>
			<div class="fun">
				<select name="" id="">
					<option value="" disabled selected style="display: none;">请选择</option>
					<option value="">1</option>
				</select>
			</div>
		</li>
		<li>
			<div class="name">
				<span>*</span>计划开班日期
			</div>
			<div class="fun">
				<input type="date">
			</div>
		</li>
		<li>
			<div class="name">
				计划结业日期
			</div>
			<div class="fun">
				<input type="date">
			</div>
		</li>
		<li>
			<div class="name">
				预招人数
			</div>
			<div class="fun">
				<input type="text" placeholder="不填或输入0表示不限">
			</div>
		</li>
		<li>
			<div class="name">
				<span>*</span>备注
			</div>
			<div class="fun">
				<input type="text" placeholder="请输入（选填）" style="width: 400px;">
			</div>
		</li>
	</ul>
</template>
<script>
import InputBox from './InputBox.vue'
export default{
	name:'ElectiveCourse',
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
</style>