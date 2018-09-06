<template>
	<div>
		<input type="checkbox">
		<span>继续添加</span>
		<button style="background: #fff;" @click="cancel">取消</button>
		<button style="background: #3673FF;color: #fff;">确定</button>
	</div>
</template>
<script>
import Bus from '../bus.js'
export default{
	name:'Ensure',
	data(){
		return{
			no:false
		}
	},
	methods:{
		cancel(){
			Bus.$emit('val', this.no)
		}
	}
}
</script>
<style scoped>
button{
	border: 1px solid #ccc;
	border-radius: 5px;
	height: 30px;
	padding: 0 20px;
}
</style>