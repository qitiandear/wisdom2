<template>
	<div>
		<button @click="tq"><i class="fa fa-table"></i></button>
		<div class="tro" v-if="isTq">
			<input type="checkbox" @click="rom" v-model="isl"><span>全选</span><br>
			<input type="checkbox" v-model="isl"><span>助教</span>
			<input type="checkbox" v-model="isl"><span>单价</span>
			<input type="checkbox" v-model="isl"><span>结业日期</span>
			<input type="checkbox" v-model="isl"><span>备注</span>
		</div>
	</div>
</template>
<script>
export default{
	name:'MoreOpre',
	data(){
		return{
			isTq:false,
			isl:false
		}
	},
	methods:{
		tq(){
			this.isTq = !this.isTq
		},
		rom(){
			if (!isl) {
				this.isl = !this.isl
			}else{
				this.isl = !this.isl
			}
		}
	}
}
</script>
<style scoped>
button{
	background: #75859B;
	border: 1px solid #75859B;
	border-radius: 5px;
	padding: 0 10px;
	height: 30px;
	cursor: pointer;
	color: #fff;
	outline: none;
}
.tro{
	position: absolute;
	background: #fff;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-top: 5px;
}
.tro:before{
	content: '';
	width: 0;
	height: 0;
	border: 6px solid #ccc;
	position: absolute;
	top: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid transparent;
	margin-top: -12px;
}
span{
	margin: 0 10px;
}
</style>