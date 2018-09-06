<template>
	<div>
		<h3 :class="{active: isH1}" @click="sh1">{{title1}}</h3>
		<h3 :class="{active: isH2}" @click="sh2">{{title2}}</h3>
		<h3 :class="{active: isH3}" @click="sh3">{{title3}}</h3>
	</div>
</template>
<script>
export default{
	name:'ReTitle',
	props:['title1','title2','title3'],
	data(){
		return{
			isH1:true,
			isH2:false,
			isH3:false
		}
	},
	methods:{
		sh1(){
			this.isH1 = true
			this.isH2 = false
			this.isH3 = false
			this.$emit('bom1',this.isH1)
		},
		sh2(){
			this.isH1 = false
			this.isH2 = true
			this.isH3 = false
			this.$emit('bom2',this.isH2)
		},
		sh3(){
			this.isH1 = false
			this.isH2 = false
			this.isH3 = true
			this.$emit('bom3',this.isH3)
		},
	}
}
</script>
<style scoped>
div{
	background: #ddd;
}
h3{
	display: inline-block;
	padding: 8px 20px;
	font-weight: normal;
	font-size: 16px;
	cursor: pointer;
}
.active{
	background: #fff;
	box-sizing: border-box;
	border-top: 2px solid #0068b7;
}
</style>