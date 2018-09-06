<template>
	<dl>
		<dt @click="dd"><i class="fa fa-angle-right"></i>名称</dt>
		<dd v-if="isp">sss</dd>
	</dl>
</template>
<script>
export default{
	name:'PopDl',
	data(){
		return{
			isp:false
		}
	},
	methods:{
		dd(){
			this.isp = !this.isp
		}
	}
}
</script>
<style scoped>
dt{
	padding-left: 20px;
	height: 40px;
	border: 1px solid #ccc; 
	line-height: 40px;
	color: #0068b7;
	background: #eee;
	cursor: pointer;
}
i{
	margin-right: 10px;
	color: #999;
}
dd{
	padding-left: 60px;
	height: 40px;
	border: 1px solid #ccc; 
	line-height: 40px;
	color: #0068b7;
	border-top: 0;
}
</style>