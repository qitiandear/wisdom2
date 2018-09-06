<template>
	<input type="text" :placeholder="pla">
</template>
<script>
export default{
	name:'Sinput',
	props:['pla']
}
</script>
<style scoped>
input{
	border: 1px solid #ccc;
	border-radius: 5px;
	height: 28px;
	padding-left: 10px;
}
</style>