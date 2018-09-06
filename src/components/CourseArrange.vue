<template>
	<div ref="newbg">
		<div class="content">
			<ScheTitle @bom1="bom1" @bom2="bom2"></ScheTitle>
			<div class="cont" v-show="isH1">
				<ul class="cont2" :style="{height:h1+'px'}">
					<li>
						<Sinput class="input re" :pla="tq" style="width: 300px;"></Sinput>
						<ReQuery class="re"></ReQuery>
						<ReSet class="re"></ReSet>
					</li>
					<li>
            			<Select class="re" :pla="tq2"></Select>
            			<Select3 class="re" style="width: 200px;"></Select3>
            			<Select3 class="re" style="width: 200px;"></Select3>
            			<Select3 class="re" style="width: 200px;"></Select3>
            			<Select class="re" :pla="tq3"></Select>
            			<Select class="re" :pla="tq4"></Select>
					</li>
					<li>
            			<Select class="re" :pla="tq5"></Select>
            			<Select class="re" :pla="tq6"></Select>
            			<Select class="re" :pla="tq7"></Select>
					</li>
					<i class="fa fa-angle-double-down dir" v-if="isDir" @click="changh(isDir)"></i>
					<i class="fa fa-angle-double-up dir" v-if="!isDir" @click="changh(isDir)"></i>
				</ul>
				<div class="cont2" style="margin-top: 10px;">
					<TView @act1="act1" @act2="act2" @act3="act3"></TView>
					<div v-show="isActive1">
						<fullCalendar :events="fcEvents" class="calendar"></fullCalendar>
					</div>
					<div v-show="isActive2">2</div>
					<div v-show="isActive3">4</div>
				</div>
			</div>
			<div class="cont" v-show="isH2">
				<ul class="cont2" :style="{height:h1+'px'}">
					<li>
						<Sinput class="input re" :pla="tq" style="width: 300px;"></Sinput>
						<ReTime class="re input"></ReTime>
						<ReQuery class="re"></ReQuery>
						<ReSet class="re"></ReSet>
					</li>
					<li>
            			<Select class="re" :pla="tq2"></Select>
            			<Select3 class="re" style="width: 200px;"></Select3>
            			<Select3 class="re" style="width: 200px;"></Select3>
            			<Select3 class="re" style="width: 200px;"></Select3>
            			<Select class="re" :pla="tq3"></Select>
            			<Select class="re" :pla="tq4"></Select>
					</li>
					<li>
            			<Select class="re" :pla="tq5"></Select>
            			<Select class="re" :pla="tq6"></Select>
            			<Select class="re" :pla="tq7"></Select>
					</li>
					<i class="fa fa-angle-double-down dir" v-if="isDir" @click="changh(isDir)"></i>
					<i class="fa fa-angle-double-up dir" v-if="!isDir" @click="changh(isDir)"></i>
				</ul>
				<div class="cont2" style="margin-top: 10px;">
					<TButton :tq="jt"></TButton>
					<TButton :tq="ydy"></TButton>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ScheTitle from './schedule/ScheTitle'
import TView from './schedule/TView'
import TButton from './schedule/TButton'
import Sinput from './receipt/Sinput'
import ReQuery from './receipt/ReQuery'
import ReSet from './receipt/ReSet'
import Select from './receipt/Select'
import ReTime from './receipt/ReTime'
import Select3 from './receipt/Select3'
import fullCalendar from 'vue-fullcalendar'
import datepicker from 'vue-date-picker'
import VueDatepickerLocal from 'vue-datepicker-local'
let demoEvents = [
    {
      title    : 'Sunny 725-727',
      start    : '2017-02-25',
      end      : '2017-02-27',
      cssClass : 'family'
    },
    {
      title : 'Lunfel 726-727',
      start : '2017-02-26',
      end : '2017-02-27',
      cssClass : ['home', 'work']
    },
    {
      title : 'Lunfel 2/27-2/28',
      start : '2017-02-27',
      end : '2017-02-28'
    },
    {
        title : 'Lunfel 2/27-2/28',
        start : '2017-02-27',
        end : '2017-02-28'
    },
    {
        title : 'Lunfel 2/27-2/28',
        start : '2017-02-27',
        end : '2017-02-28'
    },
    {
        title : 'Lunfel 2/26-3/05',
        start : '2017-02-26',
        end : '2017-03-05'
    },
    {
        title : 'Lunfel 1/27-1/28',
        start : '2017-01-27',
        end : '2017-01-28'
    },
    {
        title : 'Lunfel 1/27-2/2',
        start : '2017-01-27',
        end : '2017-02-02'
    },
    {
        title : 'Lunfel 3/27-3/28',
        start : '2017-03-27',
        end : '2017-03-28'
    },
  ];
export default{
	name:'CourseArrange',
	components:{
		ScheTitle,
		Sinput,
		ReSet,
		ReQuery,
		Select,
		Select3,
		ReTime,
		TView,
		TButton,
		fullCalendar,
		VueDatepickerLocal,
	},
	data(){
		return{
			isH1:true,
			isH2:false,
			h1:30,
			tq:'搜索班级名称/首字母',
			tq2:'请选择课程',
			tq3:'请选择老师',
			tq4:'请选择学管师',
			tq5:'请选择助教',
			tq6:'请选择学员',
			tq7:'请选择教室',
			isDir:true,
			isActive1:true,
			isActive2:false,
			isActive3:false,
			jt:'集体班排课',
			ydy:'一对一排课',
			fcEvents:demoEvents,
			time: new Date()
		}
	},
	methods:{
		bom1(b){
			this.isH1 = b
			this.isH2 = !b
		},
		bom2(b){
			this.isH2 = b
			this.isH1 = !b
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
		act1(b){
			this.isActive1 = b
			this.isActive2 = !b
			this.isActive3 = !b
	    },
	    act2(b){
			this.isActive2 = b
			this.isActive1 = !b
			this.isActive3 = !b
	    },
	    act3(b){
			this.isActive3 = b
			this.isActive1 = !b
			this.isActive2 = !b
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