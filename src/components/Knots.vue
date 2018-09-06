<template>
	<div ref="newbg">
		<div class="content" style="margin-top: 10px;">
			<Stuinfo></Stuinfo>
		</div>
		<div class="content">
			<Knotslist></Knotslist>
		</div>
		<div class="content">
			<Stpone class="stp"></Stpone>
			<Stptwo class="stp" style="margin-right: 0"></Stptwo>
		</div>
	</div>
</template>

<script>
import Stpone from './stp/Stpone'
import Stptwo from './stp/Stptwo'
import Stuinfo from './stu/Stuinfo'
import Knotslist from './knots/Knotslist'
export default {
  name: 'Refund',
  components: {
    Stpone,
    Stptwo,
    Stuinfo,
    Knotslist
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
.stp{
	float: left;
	width: 49%;
	margin-right: 1%;
}
.content:after{
	content: '';
	display: block;
	clear: both;
	width: 0;
	height: 0;
}
</style>
