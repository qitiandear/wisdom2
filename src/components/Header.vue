<template>
	<div class="myheader">
		<h3 class="h3" onmouseover="tadd(this);mopen('d1')"  onmouseout="mclosetime()">
			<svg aria-hidden="true" class="icon" style="margin-right: 7px; font-size: 18px;">
				<use xlink:href="#icon-caidan">
					<svg id="icon-caidan" viewBox="0 0 1024 1024" width="100%" height="100%">
						<path d="M128 448h320V128c0-70.4-57.6-128-128-128H128C57.6 0 0 57.6 0 128v192c0 70.4 57.6 128 128 128zM128 576h320v320c0 70.4-57.6 128-128 128H128c-70.4 0-128-57.6-128-128v-192c0-70.4 57.6-128 128-128zM576 448h320c70.4 0 128-57.6 128-128V128c0-70.4-57.6-128-128-128h-192C633.6 0 576 57.6 576 128v320zM576 576h320c70.4 0 128 57.6 128 128v192c0 70.4-57.6 128-128 128h-192c-70.4 0-128-57.6-128-128V576z"></path>
					</svg>
				</use>
			</svg>
			<span>菜单</span>
		</h3>
		<ul class="mymenucool" onmouseover="mcancelclosetime()" onmouseout="mclosetime()" id="d1">
			<li>前台业务</li>
			<li>教务管理</li>
			<li>人事管理</li>
			<li>数据中心</li>
			<dl class="dependli">
				<dd v-for="dp in dep" @click="pass(dp)">{{dp.name}}</dd>
			</dl>
			<dl class="dependli">
				<dd v-for="dp in dep2" @click="pass(dp)">{{dp.name}}</dd>
			</dl>
			<dl class="dependli">
				<dd v-for="dp in dep3" @click="pass(dp)">{{dp.name}}</dd>
			</dl>
			<dl class="dependli">
				<dd v-for="dp in dep4" @click="pass(dp)">{{dp.name}}</dd>
			</dl>
			<dl class="banner">
				<dd><i class="fa fa-gears"></i>系统设置</dd>
				<dd><i class="fa fa-search"></i>帮助</dd>
				<dd><i class="fa fa-slideshare"></i>吐个槽</dd>
				<dd><i class="fa fa-share-alt"></i>内置管理员</dd>
			</dl>
		</ul>
	</div>
</template>

<script>
import Bus from './bus.js'
export default {
  name: 'Header',
  data () {
    return {
      tq: 'header',
      dep:[
		{ name: '学员' ,url:'tl'},
	    { name: '收费' ,url:'charge' },
	    { name: '退费' ,url:'re' },
	    {name:'结转' ,url:'knots'},
	    {name:'收据管理' ,url:'receipt'}
      ],
      dep2:[
      	{name: '课程' ,url:'course'},
      	{name: '班级' ,url:'classManage'},
      	{name: '排课' ,url:'courseArrange'},
      	{name: '分配学管师' ,url:'studentMasterManage'}
      ],
      dep3:[
      	{name: '部门' ,url:'deptSetting'},
      	{name: '员工' ,url:'employeeManage'},
      	{name: '权限组' ,url:'roleManage'}
      ],
      dep4:[
      	{name: '资金' ,url:'fundsReport'},
      	{name: '运营' ,url:'operationReport'},
      	{name: '其它报表' ,url:'otherReport'}
      ]
    }
  },
  methods:{
  	pass:function (obj) {
  		Bus.$emit('dp', obj)
  		this.$router.push('/'+obj.url)
  	}
  }
}
</script>

<style scoped>
@import '../assets/css/menu.css';
</style>
