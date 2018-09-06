<template>
	<div>
		<div class="function">
			<div class="username"><i class="fa fa-user-circle"></i>ddd</div>
			<ul class="functionbox">
				<li class="fleft">
					<span class="nchange" @click="nchange"><i class="fa fa-exchange"></i></span>
					<div class="reveal1" v-show="isNc">
						<h6>今日收费   -</h6>
						<div class="totalimg">
							<img src="../../static/img/chart.b56d6be.png" alt="">
						</div>
						<div class="total til">
							5%<br>满班率
						</div>
						<div class="total tir">
							100%<br>出勤率
						</div>
					</div>
					<div class="reveal2" v-show="!isNc">
						<h4>待办事项</h4>
						<div class="total til1">
							2<br>待点名
						</div>
						<div class="total tir1">
							-<br>待分班
						</div>
						<div class="total til2">
							-<br>费用过期
						</div>
						<div class="total tir2">
							-<br>费用报警
						</div>
					</div>
				</li>
				<ul class="fright">
					<li v-for="(bo,i) in bos">
						<div class="bg" :class="ad(i+1)" @mouseenter="mouseEnter(i)" @mouseleave="mouseLeave">
							<i :class="{sh:i==isA}" @click="pop(i)" class="fa fa-pencil rop" style="font-size: 14px;"></i>
							<router-link :to="bo.url">
								<i :class="bo.ci" @click="pass(bo)"></i><br>
								<span @click="pass(bo)">{{bo.name}}</span>
							</router-link>
						</div>
					</li>
				</ul>
			</ul>
		</div>
		<div class="chiocebox" v-show="isCh">
			<img src="../../static/img/popTitle.png" alt="" class="imgtl">
			<div class="title">
				<h3>选择快捷项目</h3>
				<i class="fa fa-times rem" @click="mclose"></i>
				<div style="clear: both;"></div>
				<div class="menubox">
					<ul>
						<h4>前台业务</h4>
						<li v-for="dog in dep" @click="getDog(dog)" onclick="getcont(this)">
							<i :class="dog.ci"></i><br>
							<span>{{dog.name}}</span>
						</li>
					</ul>
					<ul>
						<h4>教务管理</h4>
						<li v-for="dog in dep2" @click="getDog(dog)" onclick="getcont(this)">
							<i :class="dog.ci"></i><br>
							<span>{{dog.name}}</span>
						</li>
					</ul>
					<ul>
						<h4>人事管理</h4>
						<li v-for="dog in dep3" @click="getDog(dog)" onclick="getcont(this)">
							<i :class="dog.ci"></i><br>
							<span>{{dog.name}}</span>
						</li>
					</ul>
					<ul>
						<h4>数据中心</h4>
						<li v-for="dog in dep4" @click="getDog(dog)" onclick="getcont(this)">
							<i :class="dog.ci"></i><br>
							<span>{{dog.name}}</span>
						</li>
					</ul>
				</div>
				<div class="btnbox">
					<button style="right: 120px;" @click="mclose">取消</button>
					<button style="background: #0068b7;color: #fff;border:1px solid #0068b7;" @click="ensure">确定</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bus from './bus.js'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      bos:[
	      {name:'退费',url:'re',ci:'fa fa-credit-card'},
	      {name:'班级',url:'classManage',ci:'fa fa-group'},
	      {name:'新手指引',url:'',ci:'fa fa-rocket'},
	      {name:'结转',url:'knots',ci:'fa fa-paypal'},
	      {name:'排课',url:'courseArrange',ci:'fa fa-calculator'},
	      {name:'课程',url:'course',ci:'fa fa-book'},
	      {name:'帮助中心',url:'www.baidu.com',ci:'fa fa-wrench'}
	    ],
      isA:null,
      isCh:false,
      isNc:true,
      index:0,
      pok:{},
      dep:[
		{ name: '学员' ,url:'tl',ci:'fa fa-mortar-board'},
	    { name: '收费' ,url:'charge',ci:'fa fa-rmb' },
	    { name: '退费' ,url:'re',ci:'fa fa-credit-card' },
	    {name:'结转' ,url:'knots',ci:'fa fa-paypal'},
	    {name:'收据管理' ,url:'receipt',ci:'fa fa-briefcase'}
      ],
      dep2:[
      	{name: '课程' ,url:'course',ci:'fa fa-book'},
      	{name: '班级' ,url:'classManage',ci:'fa fa-group'},
      	{name: '排课' ,url:'courseArrange',ci:'fa fa-calculator'},
      	{name: '分配学管师' ,url:'studentMasterManage',ci:'fa fa-user-plus'}
      ],
      dep3:[
      	{name: '部门' ,url:'deptSetting',ci:'fa fa-suitcase'},
      	{name: '员工' ,url:'employeeManage',ci:'fa fa-user'},
      	{name: '权限组' ,url:'roleManage',ci:'fa fa-leaf'}
      ],
      dep4:[
      	{name: '资金' ,url:'fundsReport',ci:'fa fa-money'},
      	{name: '运营' ,url:'operationReport',ci:'fa fa-shekel'},
      	{name: '其它报表' ,url:'otherReport',ci:'fa fa-commenting'}
      ]
    }
  },
  methods:{
  	getDog(p){
  		this.pok = p
  	},
  	ad(i){
  		return 'bg' + i
  	},
  	mouseEnter(i){
  		this.isA = i
  	},
  	mouseLeave(){
  		this.isA = null
  	},
  	pop(i){
  		this.isCh = true
  		this.index = i
  	},
  	mclose(){
  		this.isCh = false
  	},
  	nchange(){
  		this.isNc = !this.isNc
  	},
  	ensure(){
  		this.bos[this.index] = this.pok
  		this.isCh = false
  	},
  	pass(obj){
  		Bus.$emit('dp', obj)
  	},
  	getDep(){
  		var vm = this
  		axios.get('http://192.168.236.129:8081/api').then((res)=>{
  			console.log(res.data)
  			vm.dep = res.data
  		})
  	},
  	getLogin(){
  		var vm = this
  		axios.get('http://192.168.236.129:8081/api/index/login',{
	    	params: {
		      name:'tq',
		      passwd:'123'
		    }
	    }).then((res)=>{
  			console.log(res)
  		})
  	},
  	getLogin2(){
  		var vm = this
  		axios.post('http://192.168.236.129:8081/api/index/login2',
  			this.$qs.stringify({'name': 'tq', 'passwd': '123'})
  			).then((res)=>{
  			console.log(res)
  		})
  	}
  },
  mounted(){
  	this.getDep()
  	this.getLogin()
  	this.getLogin2()
  }
}
setInterval(rotate,5000);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/menu.css';
.bg span a{
	color: #fff;
}
.rop{
	position: absolute;
	top: 0;
	right: 0;
	margin-right: 10px;
	margin-top: -10px;
	display: none;
}
.sh{
	display: block;
}
</style>
