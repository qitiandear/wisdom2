<template>
	<button>{{tq}}</button>
</template>
<script>
export default{
	name:'TButton',
	props:['tq']
}
</script>
<style scoped>
button{
	padding: 5px 10px;
	border-radius: 5px;
	border: 1px solid #3673FF;
	background: #3673FF;
	color: #fff;
}
</style>