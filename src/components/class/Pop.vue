<template>
	<div class="popcontent">
		<img src="../../../static/img/popTitle.png" alt="">
		<h3>{{title}}</h3>
		<i class="fa fa-times rem" @click="tclose"></i>
		<Baseinfo class="base" style="margin-top: 10px;"></Baseinfo>
		<ElectiveCourse class="base"></ElectiveCourse>
		<GoClass class="base" style="margin-top: 10px;"></GoClass>
		<GoClassInfo class="base"></GoClassInfo>
		<Ensure class="btn"></Ensure>
	</div>
</template>
<script>
import Baseinfo from '../course/Baseinfo.vue'
import ElectiveCourse from './ElectiveCourse.vue'
import GoClass from './GoClass.vue'
import GoClassInfo from './GoClassInfo.vue'
import Ensure from './Ensure.vue'
export default{
	name:'Pop',
	props:['title'],
	components: {
		Baseinfo,
		ElectiveCourse,
		Ensure,
		GoClass,
		GoClassInfo
	},
	data(){
		return{
			tq:false
		}
	},
	methods:{
		tclose(){
			this.$emit('bom',this.tq)
		}
	}
}
</script>
<style scoped>
.popcontent{
	background: #eee;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 0 5px 5px 5px;
}
img{
	position: absolute;
	margin-left: -10px;
	margin-top: -1px;
}
h3{
	height: 39px;
	padding: 0 20px;
	background: #fff;
	display: inline-block;
	line-height: 39px;
	box-sizing: border-box;
	border-right: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
}
.rem{
	position: absolute;
	right: 0;
	margin-right: 20px;
	margin-top: 10px;
	color: #999;
}
.base{
	margin:3px 20px;
	background: #fff;
	padding:8px 30px;
	font-size: 14px;
}
.btn{
	margin-top: 20px;
	height: 40px;
	background: #fff;
	border-radius: 0 0 5px 5px;
	line-height: 40px;
	padding-left: 530px;
}
</style>