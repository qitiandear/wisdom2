<template>
	<div ref="newbg">
		<div class="content" style="margin-top: 10px;">
			<Stuinfo></Stuinfo>
		</div>
		<div class="content">
			<Stulist></Stulist>
		</div>
		<div class="content" style="margin-top: 10px;">
			<StuTips></StuTips>
		</div>
		<div style="text-align: center;">
			<button>退费</button>
		</div>
	</div>
</template>

<script>
import Stuinfo from './stu/Stuinfo'
import Stulist from './stu/Stulist'
import StuTips from './stu/StuTips'
export default {
  name: 'Refund',
  components: {
    Stuinfo,
    Stulist,
    StuTips
  },
  data () {
    return {
      tq: 'pot'
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
	padding: 10px;
	margin:3px 10px;
}
button{
	background: #3673FF;
	color: #fff;
	padding: 10px 30px 10px 40px;
	margin-top: 20px;
	border: 1px solid #3673FF;
	border-radius: 5px;
	letter-spacing: 10px;
	font-size: 18px;
}
</style>
