<template>
	<div>
		<i class="fa fa-filter"></i>
		<span>筛选项：</span>
		<div class="enable">启用状态：启用<i class="fa fa-times-circle" style="margin: 0 5px;" @click="tm"></i></div>
		<a href="">重置</a>
	</div>
</template>
<script>
export default{
	name:'Screen',
	data(){
		return{
			tq:false
		}
	},
	methods:{
		tm(){
			this.$emit('tm',this.tq)
		}
	}
}
</script>
<style scoped>
*{
	font-size: 14px;
}
i,span{
	color: #999;
}
.enable{
	border: 1px solid #ccc;
	border-radius: 5px;
	background: #eee;
	color: #333;
	display: inline-block;
	padding: 5px;
}
</style>