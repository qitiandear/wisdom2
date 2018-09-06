<template>
	<dl>
		<dt @click="tp">tim</dt>
		<dd v-show='tq'>
			<div>ddd</div>
			<div>kk</div>
		</dd>
	</dl>
</template>
<script>
export default{
	name:'Dsel',
	data(){
		return{
			tq:false
		}
	},
	methods:{
		tp(){
			this.tq = !this.tq
		}
	}
}
</script>
<style scoped>
dd{
	padding: 4px 20px;
}
</style>