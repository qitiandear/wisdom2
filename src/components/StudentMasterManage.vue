<template>
	<div ref="newbg">
		<div class="content">
			<div style="height: 38px;width: 100%;">
        <Newadd style="float: left;" @ka="ka"></Newadd>
        <div ref="dom" v-show="isDog">
          <Pop class='popcont' :title="tq" v-if="isDog" @bom="bom"></Pop>
        </div>
		    <SearchBox style="float: right;" :pla="pla"></SearchBox>
			</div>
			<TeachList style="margin: 10px 0;" :headList="headList" :clist="clist" :isFun1="isFun1" :isFun2="isFun2" @ck="ck"></TeachList>
			<PageList class="kpl" :totalpage="totalpage" :nowpage="nowpage"></PageList>
		</div>
	</div>
</template>

<script>
import Newadd from './course/Newadd'
import SearchBox from './employ/SearchBox'
import Screen from './course/Screen'
import TeachList from './class/TeachList'
import PageList from './course/PageList'
import TotalUp from './course/TotalUp'
import DelBtn from './course/DelBtn'
import Bus from './bus.js'
import Pop from './employ/Pop'
export default {
  name: 'StudentMasterManage',
  components: {
    Newadd,
    SearchBox,
    Screen,
    TeachList,
    PageList,
    TotalUp,
    DelBtn,
    Pop
  },
  data () {
    return {
      tq: '选择员工',
      isScreen:true,
      pla:'姓名/工号',
      headList:[
      	{name:"学管师"},
      	{name:"学员人数"},
      	{name:"工号"},
      	{name:"职位"},
      	{name:"入职日期"}
      ],
      clist:[
      	{name:'图灵',total:'10',workId:'88554',emp:'普工',date:'2011-10-11'},
      	{name:'图灵',total:'10',workId:'88554',emp:'普工',date:'2011-10-11'}
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
  width: 620px;
  position: absolute;
  left: 50%;
  margin-left: -310px;
  top: 0;
  margin-top: 40px;
}
</style>
