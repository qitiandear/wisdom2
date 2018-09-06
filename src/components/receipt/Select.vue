<template>
	<div>
		<input type="text" :placeholder="pla">
		<button><i class="fa fa-ellipsis-h"></i></button>
	</div>
</template>
<script>
export default{
	name:'Select',
	props:['pla']
}
</script>
<style scoped>
div{
	font-size: 0;
	display: inline-block;
}
input{
	border: 1px solid #ccc;
	border-radius: 5px 0 0 5px;
	height: 28px;
	padding-left: 10px;
	display: inline-block;
	font-size: 14px;
	width: 154px;
}
button{
	border: 1px solid #ccc;
	border-radius: 0 5px 5px 0;
	height: 30px;
	display: inline-block;
	padding: 0 10px;
	font-size: 16px;
	color: #999;
	border-left: 0;
	background: #eee;
}
</style>