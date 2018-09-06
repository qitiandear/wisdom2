<template>
	<div class="enroll">
		<ul>
			<li>
				<input type="text" :placeholder="tq">
			</li>
			<li>
				<button>选择课程</button>
			</li>
			<li>
				<button>选择班级</button>
			</li>
			<li>
				<button>选择物品</button>
			</li>
			<li>
				<select name="" id="" disabled>
					<option value="">选择模板</option>
				</select>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:'Enrolllist',
	data(){
		return{
			tq:'课程/班级/物品'
		}
	}
}
</script>
<style scoped>
.enroll{
	min-height: 220px;
}
li{
	display: inline-block;
	margin-right: 10px;
}	
input{
	border: 1px solid #ccc;
	border-radius: 5px;
	height: 30px;
	padding-left: 10px;
}
button{
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 0 10px;
	height: 30px;
	background: #fff;
}
select{
	border: 1px solid #ccc;
	border-radius: 5px;
	height: 30px;
}
</style>