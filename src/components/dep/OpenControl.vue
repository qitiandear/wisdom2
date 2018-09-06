<template>
	<div>
		<button v-show="isp" @click="su"><i class="fa fa-angle-right"></i>全部展开</button>
		<button v-show="isd" @click="su"><i class="fa fa-angle-down"></i>全部收缩</button>
	</div>
</template>
<script>
export default{
	name:'OpenControl',
	data(){
		return{
			isp:true,
			isd:false
		}
	},
	methods:{
		su(){
			this.isp = !this.isp
			this.isd = !this.isd
		}
	}
}
</script>
<style scoped>
button{
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 0px 15px;
	height: 30px;
	background: #fff;
	outline: none;
	cursor: pointer;
}
button:hover{
	background: #17A4E72A;
	border: 1px solid #17A4E72A;
	color: #0068b7;
}
i{
	color: #999;
	margin-right: 5px;
}
</style>