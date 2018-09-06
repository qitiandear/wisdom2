<template>
	<div ref="newbg">
		<div class="content">
      <ReTitle @bom1="bom1" @bom2="bom2" @bom3="bom3" :title1="title1" :title2="title2" :title3="title3"></ReTitle>
      <div v-show="isH1" class="cont">
        <ul class="cont2" :style="{height:h1+'px'}">
          <li>
            <ReTime class="re input"></ReTime>
            <ReQuery class="re"></ReQuery>
            <ReSet class="re"></ReSet>
            <div class="re">
              <input type="checkbox">收费
            </div>
            <div class="re">
              <input type="checkbox">退费
            </div>
            <div class="re">
              <input type="checkbox">显示作废收据
            </div>
            <Export></Export>
          </li>
          <li>
            <Sinput class="input re" :pla="tq"></Sinput>
            <Select class="re" :pla="tq2"></Select>
            <Select class="re" :pla="tq3"></Select>
            <Select class="re" :pla="tq4"></Select>
          </li>
          <li>
            <Select2 class="re" :pla="tq5"></Select2>
            <Sinput class="re si" :pla="tq6"></Sinput>-
            <Sinput class="re si" :pla="tq7"></Sinput>
            <Select3 class="re" style="width: 200px;"></Select3>
            <Select3 class="re" style="width: 200px;"></Select3>
            <Select class="re" :pla="tq8"></Select>
          </li>
          <i class="fa fa-angle-double-down dir" v-if="isDir" @click="changh(isDir)"></i>
          <i class="fa fa-angle-double-up dir" v-if="!isDir" @click="changh(isDir)"></i>
        </ul>
        <ChargeAmount class="amount" style="margin-right: 1.5%;" :room="room"></ChargeAmount>
        <RefundAmount class="amount" :refund="refund"></RefundAmount>
        <div class="cont2">
          <ReceiptList :headList="headList" :clist="clist" @ck="ck"></ReceiptList>
          <PageList class="kpl" :totalpage="totalpage" :nowpage="nowpage"></PageList>
        </div>
      </div>
      <div v-show="isH2" class="cont">
        <ul class="cont2" :style="{height:h1+'px'}">
          <li>
            <ReTime class="re input"></ReTime>
            <ReQuery class="re"></ReQuery>
            <ReSet class="re"></ReSet>
            <Export></Export>
          </li>
          <li>
            <Sinput class="input re" :pla="tq"></Sinput>
            <Select class="re" :pla="tq2"></Select>
            <Select class="re" :pla="tq3"></Select>
            <Select class="re" :pla="tq4"></Select>
          </li>
          <li>
            <Select2 class="re" :pla="tq5"></Select2>
            <Sinput class="re si" :pla="tq6"></Sinput>-
            <Sinput class="re si" :pla="tq7"></Sinput>
            <Select3 class="re" style="width: 200px;"></Select3>
            <Select3 class="re" style="width: 200px;"></Select3>
            <Select class="re" :pla="tq8"></Select>
          </li>
          <i class="fa fa-angle-double-down dir" v-if="isDir" @click="changh(isDir)"></i>
          <i class="fa fa-angle-double-up dir" v-if="!isDir" @click="changh(isDir)"></i>
        </ul>
        <div class="cont2" style="margin-top: 10px;">
          <ReceiptList :headList="headList" :clist="clist" @ck="ck"></ReceiptList>
          <PageList class="kpl" :totalpage="totalpage" :nowpage="nowpage"></PageList>
        </div>
      </div>
      <div v-show="isH3" class="cont">
        <ul class="cont2" :style="{height:h1+'px'}">
          <li>
            <ReTime class="re input"></ReTime>
            <ReQuery class="re"></ReQuery>
            <ReSet class="re"></ReSet>
          </li>
          <li>
            <Sinput class="input re" :pla="tq"></Sinput>
            <Select2 class="re" :pla="tq5"></Select2>
            <Select class="re" :pla="tq2"></Select>
            <Select class="re" :pla="tq3"></Select>
            <Select class="re" :pla="tq4"></Select>
          </li>
          <i class="fa fa-angle-double-down dir" v-if="isDir" @click="changh(isDir)"></i>
          <i class="fa fa-angle-double-up dir" v-if="!isDir" @click="changh(isDir)"></i>
        </ul>
        <div class="cont2" style="margin-top: 10px;">
          <ReceiptList :headList="headList" :clist="clist" @ck="ck"></ReceiptList>
          <PageList class="kpl" :totalpage="totalpage" :nowpage="nowpage"></PageList>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import ReTitle from './receipt/ReTitle'
import ReTime from './receipt/ReTime'
import ReQuery from './receipt/ReQuery'
import ReSet from './receipt/ReSet'
import Export from './receipt/Export'
import Sinput from './receipt/Sinput'
import Select from './receipt/Select'
import Select2 from './receipt/Select2'
import Select3 from './receipt/Select3'
import ChargeAmount from './receipt/ChargeAmount'
import RefundAmount from './receipt/RefundAmount'
import PageList from './course/PageList'
import ReceiptList from './receipt/ReceiptList'
export default {
  name: 'Receipt',
  components: {
    ReTitle,
    ReTime,
    ReQuery,
    ReSet,
    Export,
    Sinput,
    Select,
    Select2,
    Select3,
    ChargeAmount,
    RefundAmount,
    ReceiptList,
    PageList
  },
  data () {
    return {
      tq: '学员姓名及首字母/学号/电话',
      tq2: '请选择课程',
      tq3: '请选择班级',
      tq4: '请选择物品',
      tq5: '请输入',
      tq6: '最小金额',
      tq7: '最大金额',
      tq8: '请选择业绩归属人',
      title1:'收费/退费',
      title2:'结转',
      title3:'转班',
      isH1:true,
      isH2:false,
      isH3:false,
      isDir:true,
      room:'收费金额',
      refund:'退费金额',
      h1:30,
      headList:[
        {name:"收费/退费日期"},
        {name:"收据号"},
        {name:"学员"},
        {name:"项目名称"},
        {name:"收支金额(元)"},
        {name:"类型"},
        {name:"收款/退款账户"},
        {name:"状态"},
        {name:"所属校区"},
        {name:"创建时间"},
        {name:"创建人"}
      ],
      clist:[
        {crtime:'222',cnum:'222',name:'eoe',item:'ddd',rmo:'111',type:'ddd',cruser:'qe',is_stu:'dd',region:'dd',createtime:'ddd',createpeo:'sss'}
      ],
      totalpage:10,
      nowpage:1,
    }
  },
  methods:{
    bom1(b){
      this.isH1 = b
      this.isH2 = !b
      this.isH3 = !b
    },
    bom2(b){
      this.isH2 = b
      this.isH1 = !b
      this.isH3 = !b
    },
    bom3(b){
      this.isH3 = b
      this.isH1 = !b
      this.isH2 = !b
    },
    changh(d){
      if (d) {
        this.h1 = 113
        this.isDir = !d
      }else{
        this.h1 = 30
        this.isDir = !d
      }
    },
    ck(b){
      this.isBtn = b
    }
  },
  mounted () {
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
@import '../assets/css/menu.css';
.content{
	background: #fff;
	margin:10px;
}
.cont{
  background: #eee;
}
.cont2{
  padding: 10px;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.cont2 li{
  margin-top: 10px;
}
.cont2 li:first-child{
  margin-top: 0;
}
.input{
  width: 188px;
}
.content:after{
  content: '';
  width: 0;
  height: 0;
  clear: both;
  display: block;
}
.re{
  margin-right: 10px;
  display: inline-block;
}
.dir{
  position: absolute;
  right: 0;
  top: 50%;
  font-size: 18px;
  margin-right: 10px;
  margin-top: -9px;
  cursor: pointer;
}
.dir:hover{
  color: #0068b7;
}
.si{
  width: 77px;
}
.amount{
  display: inline-block;
  padding: 2% 1%;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 47%;
}
.kpl{
  text-align: center;
  margin-top: 20px;
}
</style>
