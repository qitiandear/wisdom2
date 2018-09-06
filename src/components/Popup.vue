<template>
	<div class="popup2">
		<img src="../../static/img/popTitle.png" alt="">
		<div class="poptl">
			<h3>选择班级</h3>
			<i class="fa fa-times rem" @click="childClick"></i>
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
			<button style="margin-right: 100px;" @click="childClick">取消</button>
			<button style="background: #0068b7;color: #fff;">确定</button>
		</div>
	</div>
</template>
<script>
export default{
	name:'Popup',
	props:['dog'],
	data(){
		return{
			tq: false
		}
	},
    methods: {
		childClick () {
			// childByValue是在父组件on监听的方法
			// 第二个参数this.childValue是需要传的值
			this.$emit('newtq', this.tq)
		}
    }
}
</script>
<style scoped="">
@import '../assets/css/menu.css';
</style>