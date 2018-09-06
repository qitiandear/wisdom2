<template>
	<ul>
		<li>
			<div class="name">
				<span>*</span>课程名称
			</div>
			<div class="fun">
				<input type="text" placeholder="请输入">
			</div>
		</li>
		<li>
			<div class="name">
				课程类别
			</div>
			<div class="fun">
				<select name="" id="">
					<option value="">请选择</option>
				</select>
			</div>
		</li>
		<li>
			<div class="name">
				科目
			</div>
			<div class="fun">
				<select name="" id="">
					<option value="">请选择</option>
				</select>
			</div>
		</li>
		<li>
			<div class="name">
				<span>*</span>类型
			</div>
			<div class="fun">
				<div style="display: inline-block;">
					<input type="radio" name="type"><div class="bo">集体班</div>
				</div>
				<div style="display: inline-block;margin-left: 60px;">
					<input type="radio" name="type"><div class="bo">一对一</div>
				</div>
			</div>
		</li>
		<li>
			<div class="name">
				<span>*</span>状态
			</div>
			<div class="fun">
				<div style="display: inline-block;">
					<input type="radio" name="tim"><div class="bo">停用</div>
				</div>
				<div style="display: inline-block;margin-left: 60px;">
					<input type="radio" name="tim"><div class="bo">启用</div>
				</div>
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
export default{
	name:'ElectiveCourse'
}
</script>
<style scoped>
li{
	line-height: 40px;
	margin-bottom: 10px;
}
.name{
	width: 70px;
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
input[type=text]{
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