<template>
	<div>
		<h3 :class="{active:isActive1}" @click="act1">时间视图</h3>
		<h3 :class="{active:isActive2}" @click="act2">老师视图</h3>
		<h3 :class="{active:isActive3}" @click="act3">教室视图</h3>
	</div>
</template>
<script>
export default{
	name:'TView',
	data(){
		return{
			isActive1:true,
			isActive2:false,
			isActive3:false
		}
	},
	methods:{
		act1(){
			this.isActive1 = true
			this.isActive2 = false
			this.isActive3 = false
			this.$emit('act1',this.isActive1)
		},
		act2(){
			this.isActive2 = true
			this.isActive1 = false
			this.isActive3 = false
			this.$emit('act2',this.isActive2)
		},
		act3(){
			this.isActive3 = true
			this.isActive2 = false
			this.isActive1 = false
			this.$emit('act3',this.isActive3)
		}
	}
}
</script>
<style scoped>
div{
	font-size: 0;
}
h3{
	display: inline-block;
	font-size: 16px;
	padding: 5px 10px;
	font-weight: normal;
	border: 1px solid #ccc;
	border-left: 0;
	border-right: 0;
	cursor: pointer;
}
h3:first-child{
	border-left: 1px solid #ccc;
	border-radius: 5px 0 0 5px;
}
h3:last-child{
	border-right: 1px solid #ccc;
	border-radius: 0 5px 5px 0;
}
.active{
	background: #3673FF;
	color: #fff;
}
</style>