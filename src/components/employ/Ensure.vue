<template>
	<div>
		<span>已选择</span>
		<span></span>
		<button style="background: #3673FF;color: #fff;">确定</button>
		<button style="background: #fff;" @click="cancel">取消</button>
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
	float: right;
	margin-right: 20px;
	margin-top: 5px;
}
div:after{
	content: '';
	width: 0;
	height: 0;
	display: block;
	clear: both;
}
span{
	float: left;
	margin-left: 20px;
}
</style>