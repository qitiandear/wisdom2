<template>
	<div ref="newbg">
		<div class="content">
			<ReTime class="re input"></ReTime>
            <ReQuery class="re"></ReQuery>
            <ReSet class="re"></ReSet>
            <schart class="wrapper" :canvasId="canvasId" :type="type" :data="data" :options="options"></schart>
		</div>
	</div>
</template>
<script>
import ReTime from './receipt/ReTime'
import ReQuery from './receipt/ReQuery'
import ReSet from './receipt/ReSet'
import Schart from 'vue-schart'
export default{
	name:'FundsReport',
	components:{
		ReTime,
		ReQuery,
		ReSet,
		Schart
	},
	data () {
        return {
            canvasId: 'myCanvas',
			type: 'bar',
			data: [
				{name: '2014', value: 1342},
				{name: '2015', value: 2123},
				{name: '2016', value: 1654},
				{name: '2017', value: 1795},
			],
			options: {
				title: '资金'
			}
        }
    },
	mounted(){
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
.content{
	background: #fff;
	padding: 10px;
	margin:10px;
}
.input{
  width: 188px;
  outline: none;
}
.re{
  margin-right: 10px;
  display: inline-block;
}
.wrapper{
	width: 600px;
	height: 400px;
}
</style>