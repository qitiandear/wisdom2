<template>
	<div>
		<input type="text" :placeholder="pla" class="stuinput">
		<button><i class="fa fa-user-plus"></i></button>
	</div>
</template>
<script>
export default{
	name:'Stuinfo',
	data(){
		return{
			pla:'学员姓名/学号/联系方式'
		}
	}
}
</script>
<style scoped>
.stuinput{
	border: 1px solid #ccc;
	box-sizing: border-box;
	border-radius: 5px;
	padding: 8px 10px;
	width: 300px;
}
button{
	padding: 8px 20px;
	background: #3673FF;
	border:1px solid #3673FF;
	color: #fff;
	box-sizing: border-box;
	border-radius: 5px;
}
</style>