<template>
	<div>
		<table cellspacing="0">
			<tr>
				<th style="width: 40px;" onclick="secheck(this,'ckbox')" @click="ck">
					<input type="checkbox">
				</th>
				<th v-for="hl in headList">
					{{hl.name}}
				</th>
			</tr>
			<tr v-for="cl in clist">
				<td class="ckbox">
					<input type="checkbox">
				</td>
				<td>{{cl.name}}</td>
				<td style="text-align: center;width: 100px;" onmouseover="sact(this)" onmouseout="hact(this)">
					<i class="fa fa-ellipsis-v" style="color: #999;"></i>
					<Function class="action" v-if="isFun1"></Function>
				</td>
				<td>{{cl.peo}}</td>
				<td>{{cl.num}}</td>
				<td>{{cl.type}}</td>
				<td>{{cl.cla}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
import Function from '../course/Function.vue'
export default{
	name:'RoleList',
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
	},
	components:{
		Function
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
	padding: 8px 10px;
	text-align: left;
	background: #eee;
	border-bottom: 1px solid #ccc;
}
td{
	padding: 8px 10px;
	text-align: left;
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