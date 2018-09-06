<template>
  <div>
  	<Header></Header>
  	<ul class="link">
  		<li id="index" onclick="queryIndex()"><router-link to="/"><i class="fa fa-desktop"></i>&nbsp;首页</router-link></li>
  		<li v-for="(dog,k) in dep" @click="query" :id="role(k)" :class="{nact:(k+1)==ki}">
  			<router-link :to="dog.url">{{dog.name}}</router-link><i class="fa fa-times-circle iclo" @click="deleteDog(k)"></i>
  		</li>
  	</ul>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Bus from './components/bus.js'
import Store from './store.js'
export default {
  name: 'Mpart',
  components: {
    Header
  },
  data(){
  	return{
  		dep: Store.fetch(),
  		isact:false,
      ki:0
  	}
  },
  mounted:function(){
  	var vm = this
  	Bus.$on('dp',function(dep){
  		vm.dep.push(dep)
      vm.ki++
  	})
  },
  watch:{
    dep: {
      handler: function (dep) {
        Store.save(dep)
      },
      deep: true
    }
  },
  methods:{
  	role(k){
  		return "pl"+k
  	},
  	deleteDog:function(k){
  		this.dep.splice(k, 1)
  		this.$router.push('/')
      this.ki = 0
  	},
    query(e){
      var el = e.currentTarget
      $(el).addClass("nact").siblings().removeClass("nact")
    }
  }
}
</script>

<style scoped>
@import './assets/css/menu.css';
</style>


