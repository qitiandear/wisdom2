<template>
	<div>
		<select name="" id="">
			<option value="">请选择</option>
		</select>
		<input type="text" :placeholder="pla">
	</div>
</template>
<script>
export default{
	name:'Select2',
	props:['pla']
}
</script>
<style scoped>
div{
	font-size: 0;
	display: inline-block;
}
select{
	height: 30px;
	border: 1px solid #ccc;
	border-radius: 5px 0 0 5px;
	padding-left: 10px;
	display: inline-block;
	font-size: 14px;
}
input{
	border: 1px solid #ccc;
	border-radius: 0 5px 5px 0;
	height: 28px;
	padding-left: 10px;
	display: inline-block;
	font-size: 14px;
	width: 112px;
	border-left: 0;
}
</style>