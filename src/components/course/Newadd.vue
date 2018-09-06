<template>
	<button @click="pop"><i class="fa fa-plus-circle"></i>新增</button>
</template>
<script>
export default{
	name:'Newadd',
	data(){
		return{
			tq:'新建课程',
			isPop:false
		}
	},
	methods:{
		pop(){
			this.$emit("ka",!this.isPop)
		}
	}
}
</script>
<style scoped>
button{
	background: #5A8BFD;
	border: 1px solid #5A8BFD;
	border-radius: 5px;
	padding: 0 15px;
	height: 30px;
	color: #fff;
	cursor: pointer;
}
i{
	margin-right: 6px;
}
</style>