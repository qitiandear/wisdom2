<template>
	<div ref="newbg">
		<div class="content">
			<ReTitle @bom1="bom1" @bom2="bom2" @bom3="bom3" :title1="title1" :title2="title2" :title3="title3"></ReTitle>
			<div v-show="isH1" class="cont">
				<h3>首页-待办事项-待分班的统计方法：截止到当前，本校区的、课程剩余课次>0（或剩余学费>0）的在读未分班学员。</h3>
        		<div class="cont2">
        			<Select class="re" :pla="lt2"></Select>
        			<Sinput class="input" :pla="lt"></Sinput>
					<ReQuery class="re"></ReQuery>
					<ReSet class="re"></ReSet>
        		</div>
			</div>
			<div v-show="isH2" class="cont">
				<h3>首页-待办事项-费用预警的统计方法：课程欠费金额>0元（或剩余课次数量≤5），且为已分班的本校学员。</h3>
        		<div class="cont2">
        			欠费金额
        			<Sinput class="dog2" value="0.01"></Sinput>-
        			<Sinput class="dog2" :pla="lt3"></Sinput>
        			剩余课次数量
        			<Sinput class="dog2" :pla="lt4"></Sinput>-
        			<Sinput class="dog2" value="0.01"></Sinput>
					<ReQuery class="re"></ReQuery>
					<ReSet class="re"></ReSet>
					<input type="checkbox"><span>只显示分班管理</span>
        		</div>
			</div>
			<div v-show="isH3" class="cont">
				<div class="cont2">
        			<Sinput class="input" :pla="lt5" style="width: 300px;"></Sinput>
					<ReQuery class="re"></ReQuery>
					<ReSet class="re"></ReSet>
					<input type="checkbox"><span>在读</span>
					<input type="checkbox"><span>已退学</span>
					<input type="checkbox"><span>当前在班</span>
        		</div>
			</div>
		</div>
	</div>
</template>
<script>
import ReTitle from './receipt/ReTitle'
import Sinput from './receipt/Sinput'
import Select from './receipt/Select'
import ReQuery from './receipt/ReQuery'
import ReSet from './receipt/ReSet'
export default{
	name:'OtherReport',
	components:{
    	ReTitle,
    	Sinput,
    	Select,
    	ReQuery,
    	ReSet
	},
	data(){
		return{
			title1:'待分班学员',
			title2:'费用预警',
			title3:'学员费用',
			isH1:true,
			isH2:false,
			isH3:false,
			lt:'学员姓名/学号/手机号',
			lt2:'请选择课程',
			lt3:'最大值',
			lt4:'最小值',
			lt5:'学员姓名及首字母/学号/电话'
		}
	},
	mounted(){
		let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	  	let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		this.$refs.newbg.style.width = w +'px';
		this.$refs.newbg.style.height = h-50 +'px';
		this.$refs.newbg.style.background = '#eee';
		this.$refs.newbg.style.position = 'absolute';
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
		}
	},
}
</script>
<style scoped>
.content{
	background: #eee;
	margin:10px;
}
.cont h3{
	font-weight: normal;
	font-size: 14px;
	color: #666;
	background: #fff;
	padding: 5px 10px;
	border:1px solid #ccc;
	margin:10px 0;
}
.cont2{
  padding: 10px;
  background: #fff;
  position: relative;
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
.re{
  margin-right: 10px;
  display: inline-block;
}
.content:after{
  content: '';
  width: 0;
  height: 0;
  clear: both;
  display: block;
}
.dog2{
	width: 108px;
}	
</style>