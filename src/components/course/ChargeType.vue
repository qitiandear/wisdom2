<template>
	<ul style="padding: 36px 30px;">
		<li>
			<div class="name">
				<span>*</span>计费方式
			</div>
			<div class="fun">
				<div style="display: inline-block;">
					<input type="radio" name="money"><div class="bo">按课时计费</div>
				</div>
				<div style="display: inline-block;margin-left: 100px;">
					<input type="radio" name="money"><div class="bo">按天计费</div>
				</div>
			</div>
		</li>
	</ul>
</template>
<script>
export default{
	name:'ChargeType'
}
</script>
<style scoped>
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
.bo{
	display: inline-block;
	position: absolute;
	margin-top: -2px;
}	
</style>