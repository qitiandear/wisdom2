<template>
	<div ref="newbg">
		<div class="content">
			<div class="contl">
				<SearchBox :pla="pla" style="margin-left: 3px;"></SearchBox>
				<PopDl style="margin-top: 20px;"></PopDl>
			</div>
			<div class="contr">
				<Newadd style="float: left;"></Newadd>
				<TotalUp style="float: left;margin-left: 10px;" v-if="isBtn"></TotalUp>
				<MoreSelect style="float: left;margin-left: 10px;" v-if="isBtn"></MoreSelect>
				<DelBtn style="float: left;margin-left: 10px;" v-if="isBtn"></DelBtn>
				<SearchBox :pla="kp" style="float: right;"></SearchBox>
				<div style="float: right;margin-right: 10px;
				margin-top: 5px;">
					<input type="checkbox" checked><span>包含子部门的员工</span>
					<input type="checkbox" checked><span>在职</span>
					<input type="checkbox" checked><span>离职</span>
				</div>
				<div style="clear:both"></div>
				<RoleList style="margin-top: 20px;" @ck="ck" :headList="headList" :clist="clist" :isFun1="isFun1"></RoleList>
				<PageList class="kpl" :totalpage="totalpage" :nowpage="nowpage"></PageList>
			</div>
		</div>
	</div>
</template>
<script>
import SearchBox from './employ/SearchBox' 
import PopDl from './dep/PopDl' 
import RoleList from './dep/RoleList'
import Newadd from './course/Newadd'
import TotalUp from './course/TotalUp'
import DelBtn from './course/DelBtn'
import MoreSelect from './class/MoreSelect'
import PageList from './course/PageList'
export default{
	name:'EmployeeManage',
	components:{
		SearchBox,
		PopDl,
		Newadd,
		RoleList,
		TotalUp,
		DelBtn,
		MoreSelect,
		PageList
	},
	data(){
		return{
			pla:'名称',
			kp:'搜索姓名/员工号',
			headList:[
      			{name:"姓名"},
      			{name:""},
      			{name:"性别"},
      			{name:"工号"},
      			{name:"在职类型"},
      			{name:"授课科目"}
      		],
			clist:[
				{name:'ree',peo:'ee',num:'E0000004',type:'全职',cla:'语文'}
			],
			isFun1:true,
			isBtn:false,
			totalpage:10,
		  	nowpage:1,
		}
	},
	methods:{
		tm(b){
			this.isScreen = b
		},
		ck(b){
			this.isBtn = b
		},
	    ka(d){
	      this.isDog = d
	    },
	    bom(lai){
	      this.isDog=lai
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
	margin: 10px;
}
.contl{
	width: 300px;
	float: left;
	background: #fff;
	padding-top: 20px;
}
.contr{
	float: right;
	width: calc(100% - 340px);
	background: #fff;
	padding: 20px 10px;
}
.content:after{
	content: '';
	width: 0;
	height: 0;
	display: block;
	clear: both;
}
.kpl{
	text-align: center;
	margin-top: 20px;
}
</style>