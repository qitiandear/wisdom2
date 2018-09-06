<template>
	<div style="text-align: center;" @mouseenter="kikomsg($event,room)">
		<h3>65,060.00</h3>
		<div>收费金额（元） / <span>6</span>笔</div>
	</div>
</template>
<script>
export default{
	name:'ChargeAmount',
	props:['room'],
	methods:{
		kikomsg($event,str){
			this.$kiko_tooltip($event, {
		        content: str,
		        direction: 'top',
		        background: '#13CE66',
		        color: '#fff',
		        time: 3000
		    })
		}
	}
}
</script>
<style scoped>
h3,span{
	color: #22E01EFF;
}
</style>