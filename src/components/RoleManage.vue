<template>
	<div ref="newbg">
		<div class="content">
			<Newadd class="tom"></Newadd>
			<DelBtn class="tom" v-if="isBtn"></DelBtn>
			<RoleList style="margin-top: 20px;" @ck="ck" :headList="headList" :clist="clist" :isFun1="isFun1"></RoleList>
		</div>
	</div>
</template>
<script>
import Newadd from './course/Newadd'
import DelBtn from './course/DelBtn'
import RoleList from './dep/RoleList'
export default{
	name:'RoleManage',
	components:{
		Newadd,
		RoleList,
		DelBtn
	},
	data(){
		return{
			headList:[
      			{name:"组名"},
      			{name:""},
      			{name:"描述"},
      			{name:""},
      			{name:""},
      			{name:""}
      		],
			clist:[
				{name:'ree',peo:'ee'}
			],
			isFun1:true,
			isBtn:false
		}
	},
	methods:{
		ck(b){
	  		this.isBtn = b
	  	},
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
.tom{
	display: inline-block;
	margin-right: 10px;
}	
</style>