<template>
	<div ref="newbg">
		<div class="content">
			<div style="height: 38px;width: 100%;">
				<Newadd style="float: left;" @ka="ka"></Newadd>
				<div ref="dom" v-show="isDog">
        			<Pop class='popcont' :title="tq" v-if="isDog" @bom="bom"></Pop>
				</div>
				<TotalUp style="float: left;margin-left: 10px;" v-if="isBtn"></TotalUp>
				<MoreSelect style="float: left;margin-left: 10px;" v-if="isBtn"></MoreSelect>
				<DelBtn style="float: left;margin-left: 10px;" v-if="isBtn"></DelBtn>
				<MoreOpre style="float: left;margin-left: 10px;"></MoreOpre>
				<SearchBox style="float: right;" :pla="pla"></SearchBox>
			</div>
			<Screen v-show="isScreen" @tm="tm"></Screen>
			<CourseList style="margin: 10px 0;" :headList="headList" :clist="clist" :isFun1="isFun1" :isFun2="isFun2" @ck="ck"></CourseList>
			<PageList class="kpl" :totalpage="totalpage" :nowpage="nowpage"></PageList>
		</div>
	</div>
</template>
<script>
import Newadd from './course/Newadd'
import SearchBox from './employ/SearchBox'
import Screen from './course/Screen'
import CourseList from './course/CourseList'
import PageList from './course/PageList'
import TotalUp from './course/TotalUp'
import DelBtn from './course/DelBtn'
import MoreOpre from './class/MoreOpre'
import Pop from './class/Pop'
import Bus from './bus.js'
import MoreSelect from './class/MoreSelect'
export default{
	name:'ClassManage',
	components: {
		Newadd,
		SearchBox,
		Screen,
		CourseList,
		PageList,
		TotalUp,
		DelBtn,
		MoreOpre,
		MoreSelect,
		Pop
	},
	data () {
		return {
		  tq: '选择班级',
		  isScreen:true,
		  pla:'班级名称',
		  headList:[
		  	{name:"班级名称"},
		  	{name:""},
		  	{name:"课程名称"},
		  	{name:"所属校区"},
		  	{name:"类型"},
		  	{name:"人数"},
		  	{name:"教室"},
		  	{name:"上课老师"},
		  	{name:"上课时间"},
		  	{name:"上课进度"},
		  	{name:"开班日期"},
		  	{name:"状态"},
		  	{name:"创建时间"}
		  ],
		  clist:[
		  	{name:"语文",cname:"2",type:"普通",clasnum:"1",ctype:"2",smoney:"11",res:"榆次",is_type:"在学",tips:"sss",time:"2018-02-11",people:"我",mytime:"2018-08-21 11:43:04	"},
		  	{name:"语文",cname:"2",type:"普通",clasnum:"1",ctype:"2",smoney:"11",res:"榆次",is_type:"在学",tips:"sss",time:"2018-02-11",people:"我",mytime:"2018-08-21 11:43:04	"}
		  ],
		  totalpage:10,
		  nowpage:1,
		  isFun1:false,
		  isFun2:true,
		  isBtn:false,
      	  isDog:false
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
			let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			this.$refs.dom.style.width = w +'px';
			this.$refs.dom.style.height = h +'px';
			this.$refs.dom.style.background = 'rgba(0,0,0,.5)';
			this.$refs.dom.style.top = 0;
			this.$refs.dom.style.left = 0;
			this.$refs.dom.style.marginTop = -50 + 'px';
			this.$refs.dom.style.position = 'absolute';
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
		var vm = this
	    Bus.$on('val', (data) => {
	      vm.isDog = data
	    })
	}
}
</script>
<style scoped>
.content{
	background: #fff;
	padding: 10px;
	margin:10px;
}
.content:after{
	content: '';
	display: block;
	clear: both;
	width: 0;
	height: 0;
}
.kpl{
	text-align: center;
}
.popcont{
  width: 820px;
  position: absolute;
  left: 50%;
  margin-left: -410px;
  top: 0;
  margin-top: 40px;
}
</style>