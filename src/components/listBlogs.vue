<template>
	<div v-theme:column="'narrow'" id="show-blogs">
		<h1>List Blog Titles</h1>
		<input type="text" placeholder="search blogs" v-model="search" />
		<!--div v-for="blog in blogs" class="single-blog"-->
		<div v-for="blog in filteredBlogs" class="single-blog">
			<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
		</div>
	</div>
</template>

<script>
	
  import searchMixin from '../mixins/searchMixin';
  import axios from 'axios';

	export default{
		data() {
			return {
				blogs:[],
				search:"",
			};
		},
  		methods:{

  		},
  		//lifecycle hooks
  		created(){
  			//this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data) {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(function(data) {
					console.log("listBlogs: " + data);
  					this.blogs = data.body.slice(0, 10);
  			})
  		},
  		computed:{
  		},
      mixins:[searchMixin],
  		//local declaration 
  		filters:{
  			//"to-uppercase":function(value){
  			toUppercase(value){
  				return value.toUpperCase();
  			}
  		},
  		directives:{
  			"rainbow":{
  				bind(el, binding, vnode){
  					el.style.color = "#" + Math.random().toString().slice(2, 8);
		}
  			}
  		}
	}
</script>

<style>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;

}	
.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
</style>