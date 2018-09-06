<template>
	<div>
		<table cellspacing="0">
			<tr>
				<th style="width: 30px;" onclick="secheck(this,'ckbox')"><input type="checkbox" @click="ck"></th>
				<th v-for="hl in headList">
					{{hl.name}}
				</th>
			</tr>
			<tr v-for="cl in clist">
				<td class="ckbox"><input type="checkbox"></td>
				<td>{{cl.name}}</td>
				<td onmouseover="sact(this)" onmouseout="hact(this)" style="width: 100px;">
					<i class="fa fa-ellipsis-v" style="color: #999;"></i>
					<Function class="action" v-if="isFun1"></Function>
					<Function2 class="action" v-if="isFun2"></Function2>
				</td>
				<td>{{cl.cname}}</td>
				<td>{{cl.type}}</td>
				<td>{{cl.clasnum}}</td>
				<td>{{cl.ctype}}</td>
				<td>{{cl.smoney}}</td>
				<td>{{cl.res}}</td>
				<td>{{cl.is_type}}</td>
				<td>{{cl.tips}}</td>
				<td>{{cl.time}}</td>
				<td>{{cl.people}}</td>
				<td>{{cl.mytime}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
import Function from './Function.vue'
import Function2 from './Function2.vue'
export default{
	name:'CourseList',
	components:{
		Function,
		Function2
	},
	props:{
		headList:{
			type:Array,
			required:true
		},
		clist:{
			type:Array,
			required:true
		},
		isFun1:{
			type:Boolean,
			required:true
		},
		isFun2:{
			type:Boolean,
			required:true
		}
	},
	data(){
		return{
			tq:false
		}
	},
	methods:{
		ck(){
			this.tq = !this.tq
			this.$emit('ck',this.tq)
		}
	}
}
</script>
<style scoped>
table{
	width: 100%;
	border: 1px solid #ccc;
	border-bottom: 0;
}
th{
	padding: 8px 0;
	text-align: center;
	background: #eee;
	border-bottom: 1px solid #ccc;
}
td{
	padding: 8px 0;
	text-align: center;
	border-bottom: 1px solid #ccc;
}
tr:hover{
	background: #14D3EA17;
}
.action{
	position: absolute;
	padding: 10px 0;
	background: #fff;
	width: 120px;
	margin-left: -75px;
	margin-top: -5px;
	text-align: center;
	display: none;
	box-shadow: 1px 1px 1px #000;
}
</style>