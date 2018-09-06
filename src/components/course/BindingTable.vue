<template>
	<div>
		<table cellspacing="0">
			<tr>
				<th>名称</th>
				<th>价格	</th>
				<th>单位</th>
				<th>操作</th>
			</tr>
			<BindingTd></BindingTd>
		</table>
		<div class="add">添加...</div>
	</div>
</template>
<script>
import BindingTd from './BindingTd.vue'
export default{
	name:'BindingTable',
	components:{
		BindingTd
	}
}
</script>
<style scoped>
table{
	border: 1px solid #ccc;
	border-bottom: 0;
	width: 100%;
}
th{
	background: #eee;
	border-bottom: 1px solid #ccc;
	text-align: left;
	padding: 8px 10px;
}
.add{
	color: blue;
	padding: 5px 10px;
	cursor: pointer;
}
</style>