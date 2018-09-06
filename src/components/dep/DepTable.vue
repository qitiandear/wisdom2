<template>
	<div>
		<table cellspacing="0">
			<tr>
				<th v-for="hl in headList">
					{{hl.name}}
				</th>
			</tr>
			<tr v-for="cl in clist">
				<td>{{cl.name}}</td>
				<td>
					<i class="fa fa-ellipsis-v"></i>
				</td>
				<td>{{cl.peo}}</td>
				<td>{{cl.tel}}</td>
			</tr>
		</table>
	</div>
</template>
<script>

export default{
	name:'DepTable',
	props:{
		headList:{
			type:Array,
			required:true
		},
		clist:{
			type:Array,
			required:true
		}
	},
	data(){
		return{
			tq:false
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
th:first-child{
	text-align: left;
	padding-left: 20px;
}
td:first-child{
	text-align: left;
	padding-left: 20px;
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