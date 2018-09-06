<template>
	<div class="popcontent">
		<img src="../../../static/img/popTitle.png" alt="">
		<h3>{{title}}</h3>
		<i class="fa fa-times rem" @click="tclose"></i>
		<div class="base" style="margin-top: 10px;">
			<SearchBox :pla="pla"></SearchBox>
			<div class="pre">
				<input type="checkbox"><span>已离职</span>
			</div>
			<Dsel style="margin-top: 15px;"></Dsel>
		</div>
		<Ensure class="cont"></Ensure>	
	</div>
</template>
<script>
import SearchBox from './SearchBox.vue'
import Dsel from './Dsel.vue'
import Ensure from './Ensure.vue'
export default{
	name:'Pop',
	props:['title'],
	components:{
		SearchBox,
		Dsel,
		Ensure
	},
	data(){
		return{
			tq:false,
			pla:'姓名'
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
.pre{
	top: 0;
	right: 0;
	margin-right: 180px;
	margin-top: 58px;
	position: absolute;
	width: 80px;
}
.pre span{
	position: absolute;
	margin-top: -2px;
}
.cont{
	background: #fff;
	border-radius: 0 0 5px 5px;
	margin-top: 15px;
	line-height: 40px;
}
</style>