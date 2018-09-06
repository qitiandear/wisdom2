<template>
	<div>
		<input type="text" :placeholder="pla">
		<button><i class="fa fa-search"></i></button>
	</div>
</template>
<script>
export default{
	name:'SearchBox',
	data(){
		return{
			pla:'课程名称'
		}
	}
}
$(function(){
	$("input").focus(function(){
		$("input").css("border","1px solid #0068b7");
	})
	$("input").blur(function(){
		$("input").css("border","1px solid #ccc");
	})
})
</script>
<style scoped>
input{
	float: left;
	height: 30px;
	border-radius: 5px 0 0 5px;
	border:1px solid #ccc;
	padding-left: 10px;
	box-sizing: border-box;
	width: 260px;
	outline: none;
}
button{
	float: left;
	height: 30px;
	border-radius: 0 5px 5px 0;
	border:1px solid #ccc;
	border-left: 0;
	padding: 0 20px;
	color: #999;
	cursor: pointer;
	outline: none;
}
button:hover{
	background: #5A8BFD;
	color: #fff;
	border:1px solid #5A8BFD;
	border-left: 0;
}
</style>