import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'//http requests
import VueRouter from 'vue-router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Routes from './routes'

//Vue.use(VueResource);
Vue.use(VueAxios, Axios);
Vue.use(VueRouter);


const router = new VueRouter({
	routes:Routes,
	mode:'history',
});

Vue.directive("theme", {
	bind(el, binding, vnode){
		if (binding.value == "wide")
		{
			el.style.maxWidth = "1200px";
		}
		else if (binding.value == "narrow")
		{
			el.style.maxWidth = "560px";
		}
		if(binding.arg == "column")
		{
			el.style.background = "#ddd";
			el.style.padding = "20px";
		}
	}
});

//Global Filter

Vue.filter('snippet', function(value){
return value.slice(0, 100) + "...";
});

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
