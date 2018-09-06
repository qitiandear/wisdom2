<template>
	<div class="bb">
		<input type="text" placeholder="请选择">
		<button><i class="fa fa-ellipsis-h"></i></button>
	</div>
</template>
<script>
export default{
	name:'InputBox'
}
</script>
<style scoped>
.bb{
	height: 30px;
	width: 312px;
}
input{
	float: left;
	border: 1px solid #ccc;
	height: 30px;
	width: 270px;
	padding-left: 10px;
	border-radius: 5px 0 0 5px;
}
button{
	float: left;
	border: 1px solid #ccc;
	height: 32px;
	width: 30px;
	color: #999;
	background: #ccc;
	border-radius:0 5px 5px 0;
	cursor: pointer;
}
button:hover{
	border: 1px solid #3673FF;
	background: #3673FF;
	color: #fff;
}
</style>