<template>
	<div ref="newbg">
		<div class="content">
			<Enrollinfo></Enrollinfo>
		</div>
		<div class="content">
			<Enrolllist></Enrolllist>
		</div>
		<div class="content">
			<Enrolltips></Enrolltips>
		</div>
		<div style="text-align: center;">
			<input type="checkbox" style="margin-right: 10px;">存为模板
			<button class="btn">报名</button>
		</div>
		<H></H>
	</div>
</template>

<script>
import Enrollinfo from './enroll/Enrollinfo'
import Enrolllist from './enroll/Enrolllist'
import Enrolltips from './enroll/Enrolltips'
import H from './hs/H'
export default {
  name: 'Charge',
  components: {
    Enrollinfo,
    Enrolllist,
    Enrolltips,
    H
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
	margin:10px;
}
.btn{
	background: #3673FF;
	color: #fff;
	padding: 10px 30px 10px 40px;
	margin-top: 10px;
	border: 1px solid #3673FF;
	border-radius: 5px;
	letter-spacing: 10px;
	font-size: 18px;
}
</style>
