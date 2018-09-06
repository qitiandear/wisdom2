<template>
	<div ref="newbg">
		<div class="container">
			<ul class="signup">
				<li>新学员报名</li>
				<li v-show="isP">批量修改</li>
				<li v-show="isP">更多操作<i class="fa fa-angle-down" style="padding-left: 5px;"></i></li>
				<li v-show="isP" style="background: #FF0036FF;color: #fff;border-color: #FF0036FF;"><i class="fa fa-trash-o"></i></li>
				<li style="background: #0DEFF1FF;color: #fff;border-color: #0DEFF1FF;"><i class="fa fa-download"></i></li>
				<li style="background: #92BCF2;color: #fff;border-color: #92BCF2;"><i class="fa fa-upload"></i></li>
				<li style="background: #999;color: #fff;border-color: #999;"><i class="fa fa-window-maximize"></i></li>
				<div style="float: right;">
					<div class="entering">
						<input type="text" placeholder="请选择课程">
						<button onclick="popopen('popup')"><i class="fa fa-ellipsis-h"></i></button>
					</div>
					<div class="entering">
						<input type="text" placeholder="请选择班级">
						<button @click="setpop"><i class="fa fa-ellipsis-h"></i></button>
					</div>
					<div class="entering">
						<input type="text" style="width: 240px;" placeholder="学生姓名/学号/电话号码">
						<button><i class="fa fa-search"></i></button>
					</div>
				</div>
			</ul>
			<div style="margin-top: 5px;">
				<i class="fa fa-filter" style="color: #999;margin-right: 5px;"></i>
				<span style="color: #999;">筛选项：</span>
				<div style="display: inline-block;border: 1px solid #ccc;padding: 4px 8px;border-radius: 5px;background: #f9f9f9;">状态：在读<i class="fa fa-times-circle" style="margin-left: 15px;color: #ccc;"></i></div>
				<span style="color: #999;">重置</span>
			</div>
			<table class="stutable" cellspacing="0">
				<tr>
					<th onclick="secheck(this,'ckbox')">
						<input type="checkbox" @click="nc"> 
					</th>
					<th class="stuname">姓名</th>
					<th style="width: 30px;"></th>
					<th>学号</th>
					<th>师生信</th>
					<th>状态<i class="fa fa-filter" style="color: #0068b7;margin-left: 10px;"></i></th>
					<th>手机号码</th>
					<th>在读班级数</th>
					<th>剩余学费</th>
					<th>电子钱包</th>
					<th>欠费金额</th>
					<th>积分</th>
					<th>报名日期<i class="fa fa-filter" style="color: #999;margin-left: 5px;"></i></th>
					<th>所属校区</th>
				</tr>
				<tr>
					<td class="ckbox">
						<input type="checkbox"> 
					</td>
					<td class="stuname">姓名</td>
					<td onmouseover="sact(this)" onmouseout="hact(this)">
						<i class="fa fa-ellipsis-v" style="color: #999;"></i>
						<ul class="action">
							<li>修改学员信息</li>
							<li>选择座位</li>
							<li>转班</li>
							<li>退学</li>
							<li>删除</li>
							<li>...</li>
						</ul>
					</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td class="ckbox">
						<input type="checkbox"> 
					</td>
					<td class="stuname">姓名</td>
					<td onmouseover="sact(this)" onmouseout="hact(this)">
						<i class="fa fa-ellipsis-v" style="color: #999;"></i>
						<ul class="action">
							<li>修改学员信息</li>
							<li>选择座位</li>
							<li>转班</li>
							<li>退学</li>
							<li>删除</li>
							<li>...</li>
						</ul>
					</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</table>
			<ul class="pagebox">
				<span>共条</span>
				<li>10条</li>
				<span>第1/1页</span>
				<li><</li>
				<li>1</li>
				<li>></li>
			</ul>
			<div class="popup">
				<img src="../../static/img/popTitle.png" alt="">
				<div class="poptl">
					<h3>选择课程</h3>
					<i class="fa fa-times rem" onclick="popclose('popup')"></i>
				</div>
				<div class="sebox">
					<input type="text" placeholder="课程名称">
					<input type="checkbox">集体班
					<input type="checkbox">一对一<span style="margin-left: 20px;color: #999;">|</span>
					<input type="checkbox">包含已停课程
					<button style="background: #D66B28FF;color: #fff;">查询</button>
					<button>重置</button>
					<i class="fa fa-angle-double-down down" onclick="sedown()"></i>
					<select name="" id="">
						<option value="">科目</option>
					</select>
					<select name="" id="">
						<option value="">类别</option>
					</select>
				</div>
				<div class="coursetb">
					<table cellspacing="0">
						<tr>
							<th>课程名称</th>
							<th>科目</th>
							<th>类别</th>
							<th>价格（元）</th>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</table>
					<ul class="pagebox">
						<li><i class="fa fa-arrow-circle-left"></i></li>
						<li><i class="fa fa-angle-left"></i></li>
						<li>1</li>
						<span>共页</span>
						<li><i class="fa fa-angle-right"></i></li>
						<li><i class="fa fa-arrow-circle-right"></i></li>
					</ul>
				</div>
				<div class="ensure">
					<span>已选择：</span>
					<button style="margin-right: 100px;" onclick="popclose('popup')">取消</button>
					<button style="background: #0068b7;color: #fff;">确定</button>
				</div>
			</div>
			<Popup v-show="tq" :dog='tq' @newtq="newtq"></Popup>
		</div>
	</div>
		
</template>

<script>
import Popup from './Popup'

export default {
  name: 'Tlevel',
  components: {
    Popup
  },
  data () {
    return {
      tq: false,
      isP:false
    }
  },
  methods: {
    setpop: function (){
      this.tq = true
    },
    newtq: function (newtq) {
        this.tq = newtq
    },
    nc(){
    	this.isP = !this.isP
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/menu.css';
</style>
