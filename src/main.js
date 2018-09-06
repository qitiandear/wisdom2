// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mpart from './Mpart'
import router from './router'
import './assets/css/common.css'
import './assets/css/menu.css'
import $ from 'jquery'
import qs from 'qs'
import Kiko from 'kiko-rascalhao'
Vue.use(Kiko)
Vue.config.productionTip = false
Vue.prototype.$qs = qs
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		Mpart
	},
	template: '<Mpart/>'
})