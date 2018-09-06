<template>
	<div ref="newbg">
		<div class="content">
			<ReTitle @bom1="bom1" @bom2="bom2" @bom3="bom3" :title1="title1" :title2="title2" :title3="title3"></ReTitle>
			<div v-show="isH1" class="cont">
        		ff
			</div>
			<div v-show="isH2" class="cont">
				ffs
			</div>
			<div v-show="isH3" class="cont">
				vvs
			</div>
		</div>
	</div>
</template>
<script>
import ReTitle from './receipt/ReTitle'
export default{
	name:'OperationReport',
	components:{
    	ReTitle
	},
	data(){
		return{
			title1:'营收',
			title2:'课消',
			title3:'运营指标',
			isH1:true,
			isH2:false,
			isH3:false,
		}
	},
	mounted(){
		let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	  	let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		this.$refs.newbg.style.width = w +'px';
		this.$refs.newbg.style.height = h-50 +'px';
		this.$refs.newbg.style.background = '#eee';
		this.$refs.newbg.style.position = 'absolute';
	},
	methods:{
		bom1(b){
			this.isH1 = b
			this.isH2 = !b
			this.isH3 = !b
		},
		bom2(b){
			this.isH2 = b
			this.isH1 = !b
			this.isH3 = !b
		},
		bom3(b){
			this.isH3 = b
			this.isH1 = !b
			this.isH2 = !b
		}
	},
}
</script>
<style scoped>
.content{
	background: #fff;
	margin:10px;
}
.cont{
  background: #eee;
}
.cont2{
  padding: 10px;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.cont2 li{
  margin-top: 10px;
}
.cont2 li:first-child{
  margin-top: 0;
}
.input{
  width: 188px;
}
.content:after{
  content: '';
  width: 0;
  height: 0;
  clear: both;
  display: block;
}	
</style>