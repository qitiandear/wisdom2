<template>
	<ul>
		<span>共{{totalpage}}页</span>
		<li class="se">
			<select name="" id="">
				<option value="">10</option>
				<option value="">20</option>
				<option value="">30</option>
			</select>
		</li>
		<span>第<span style="color: #0068b7;">{{nowpage}}</span>/{{totalpage}}页</span>
		<li class="lil"><i class="fa fa-angle-left"></i></li><li>1</li><li class="lir"><i class="fa fa-angle-right"></i></li>
	</ul>
</template>
<script>
export default{
	name:'PageList',
	props:{
		totalpage:{
			type:Number,
			required:true
		},
		nowpage:{
			type:Number,
			required:true
		}
	}
}
</script>
<style scoped>
li{
	display: inline-block;
	border: 1px solid #ccc;
	padding: 4px 20px;
}
.lil{
	border-radius: 5px 0 0 5px ;
	border-right: 0;
	padding: 4px 8px;
}
.lir{
	border-left: 0;
	border-radius: 0 5px 5px 0;
	padding: 4px 8px;
}
select{
	border: 0;
	outline: none;
}
.se{
	padding: 4px 5px;
	border-radius: 5px;
}
</style>