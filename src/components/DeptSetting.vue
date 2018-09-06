<template>
	<div ref="newbg">
		<div class="content">
			<OpenControl style="float: left;"></OpenControl>
			<SearchBox :pla="pla" style="float: right;"></SearchBox>
			<div style="clear: both;"></div>
			<DepTable style="margin-top: 20px;" :headList="headList" :clist="clist"></DepTable>
		</div>
	</div>
</template>
<script>
import OpenControl from './dep/OpenControl.vue'
import SearchBox from './employ/SearchBox'
import DepTable from './dep/DepTable'
export default{
	name:'DeptSetting',
	components:{
		OpenControl,
		SearchBox,
		DepTable
	},
	data(){
		return{
			pla:'部门名称',
			headList:[
      			{name:"部门名称"},
      			{name:""},
      			{name:"负责人"},
      			{name:"联系方式"}
      		],
			clist:[
				{name:'ree',peo:'ee',tel:'123'}
			]
		}
	},
	mounted(){
		let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	  	let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		this.$refs.newbg.style.width = w +'px';
		this.$refs.newbg.style.height = h-50 +'px';
		this.$refs.newbg.style.background = '#eee';
		this.$refs.newbg.style.position = 'absolute';
	}
}
</script>
<style scoped>
.content{
	background: #fff;
	padding: 10px;
	margin:10px;
}	
</style>