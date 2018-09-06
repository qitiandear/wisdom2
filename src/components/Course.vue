<template>
	<div ref="newbg">
		<div class="content">
			<div style="height: 38px;width: 100%;">
        <Newadd style="float: left;" @ka="ka"></Newadd>
        <div ref="dom" v-show="isDog">
          <Pop class='popcont' :title="tq" v-if="isDog" @bom="bom"></Pop>
        </div>
				<TotalUp style="float: left;margin-left: 10px;" v-if="isBtn"></TotalUp>
				<DelBtn style="float: left;margin-left: 10px;" v-if="isBtn"></DelBtn>
				<SearchBox style="float: right;"></SearchBox>
			</div>
			<Screen v-show="isScreen" @tm="tm"></Screen>
			<CourseList style="margin: 10px 0;" :headList="headList" :clist="clist" :isFun1="isFun1" :isFun2="isFun2" @ck="ck"></CourseList>
			<PageList class="kpl" :totalpage="totalpage" :nowpage="nowpage"></PageList>
		</div>
	</div>
</template>

<script>
import Newadd from './course/Newadd'
import SearchBox from './course/SearchBox'
import Screen from './course/Screen'
import CourseList from './course/CourseList'
import PageList from './course/PageList'
import TotalUp from './course/TotalUp'
import DelBtn from './course/DelBtn'
import Bus from './bus.js'
import Pop from './course/Pop'
export default {
  name: 'Course',
  components: {
    Newadd,
    SearchBox,
    Screen,
    CourseList,
    PageList,
    TotalUp,
    DelBtn,
    Pop
  },
  data () {
    return {
      tq: '新建课程',
      isScreen:true,
      headList:[
      	{name:"课程名称"},
      	{name:""},
      	{name:"科目"},
      	{name:"类型"},
      	{name:"开班数"},
      	{name:"类别"},
      	{name:"单价(元)"},
      	{name:"授权校区"},
      	{name:"状态"},
      	{name:"备注"},
      	{name:"创建时间"},
      	{name:"创建人"},
      	{name:""}
      ],
      clist:[
      	{name:"语文",cname:"2",type:"普通",clasnum:"1",ctype:"2",smoney:"11",res:"榆次",is_type:"在学",tips:"sss",time:"2018-02-11",people:"我"},
      	{name:"语文",cname:"2",type:"普通",clasnum:"1",ctype:"2",smoney:"11",res:"榆次",is_type:"在学",tips:"sss",time:"2018-02-11",people:"我"}
      ],
      totalpage:10,
      nowpage:1,
      isFun1:true,
      isFun2:false,
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
  mounted () {
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
