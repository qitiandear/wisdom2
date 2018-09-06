<template>
	<div style="text-align: center;" @mouseenter="kikomsg($event,refund)">
		<h3>50.00</h3>
		<div>退费金额（元） / <span>6</span>笔</div>
	</div>
</template>
<script>
export default{
	name:'RefundAmount',
	props:['refund'],
	methods:{
		kikomsg($event,str){
			this.$kiko_tooltip($event, {
		        content: str,
		        direction: 'top',
		        background: '#FA8104FF',
		        color: '#fff',
		        time: 3000
		    })
		}
	}
}
</script>
<style scoped>
h3,span{
	color: #FA8104FF;
}
</style>