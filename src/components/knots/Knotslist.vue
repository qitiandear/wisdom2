<template>
	<div>
		<input type="checkbox"><span>包含其它校区的收费</span>
		<table cellspacing="0">
			<tr>
				<th>收费日期</th>
				<th>收据号</th>
				<th>项目名称</th>
				<th>计费方式</th>
				<th>购买数量</th>
				<th>购买单价（元）</th>
				<th>购买金额（元）</th>
				<th>剩余数量</th>
				<th>剩余金额（元）</th>
				<th>结转数量</th>
				<th>结转金额</th>
			</tr>
			<tr v-for="(stu,k) in stus">
				<td>{{stu.time}}</td>
				<td>{{stu.tid}}</td>
				<td>{{stu.tname}}</td>
				<td>{{stu.ttype}}</td>
				<td>{{stu.buynum}}</td>
				<td>{{stu.buys}}</td>
				<td>{{stu.buyt}}</td>
				<td>{{stu.surplusn}}</td>
				<td>{{stu.surplusm}}</td>
				<td>{{stu.refundn}}</td>
				<td>{{stu.refundm}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default{
	name:'Knotslist',
	data(){
		return{
			stus:[
				{'time':'208-09-01','tid':'c0001','tname':'语文','ttype':'课时','buynum':'10','buys':'10','buyt':'100','surplusn':'50','surplusm':'10','refundn':'10','refundm':'10'}
			]
		}
	}
}	
</script>
<style scoped>
span{
	font-size: 14px;
	position: absolute;
	margin-left: 6px;
}
table{
	width: 100%;
	margin-top: 10px;
	border: 1px solid #ccc;
	border-bottom: 0;
}
th{
	border-bottom: 1px solid #ccc;
	padding: 8px 10px;
	color: #333;
	background: #eee;
	font-size: 15px;
	text-align: left;
}
td{
	padding: 8px 10px;
	border-bottom: 1px solid #ccc;
}
</style>