<template>
	<div>
		<button @click="pop">更多操作<i class="fa fa-angle-down" style="padding-left: 5px;"></i></button>
		<ul v-if="isTq">
			<li>结业</li>
			<li>撤销结业</li>
			<li>查看班级花名册</li>
			<li>查看座位表</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:'MoreSelect',
	data(){
		return{
			isTq:false
		}
	},
	methods:{
		pop(){
			this.isTq = !this.isTq
		}
	}
}
</script>
<style scoped>
button{
	background: #fff;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 0 15px;
	height: 30px;
	cursor: pointer;
	outline: none;
}
ul{
	position: absolute;
	margin-top: 5px;
	background: #fff;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 15px 0;
}
li{
	padding: 5px 10px;
}
li:hover{
	background: #eee;
}
ul::before{
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
	margin-left: 5px;
}
</style>