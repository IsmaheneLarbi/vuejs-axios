<template>
	<div v-theme:column="'narrow'" id="show-blogs">
		<h1>All My Blogs Articles</h1>
		<input type="text" placeholder="search blogs" v-model="search" />
		<div v-for="blog in filteredBlogs" class="single-blog">
			<router-link v-bind:to ="'/blog/' + blog.id"><h2>{{blog.title | to-uppercase}}</h2></router-link>
			<article>{{blog.content | snippet}}</article>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import searchMixin from '../mixins/searchMixin';

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
        let self = this;
  		//	this.$http.get("https://blog-e02b7.firebaseio.com/posts.json").then(function(data) {
        axios.get("https://blog-e02b7.firebaseio.com/posts.json").then(function(data) {
  				//return data.json();
          data = data.data;
          let myblogs = [];
          for (let key in data)
          {
            data[key].id = key;
            myblogs.push(data[key]);
          }
          self.blogs = myblogs;
          console.log(self.blogs);
  			})/*
          .then(function (data) {
  				var blogsArray = [];
  				for (let key in data){
  					data[key].id = key;
  					blogsArray.push(data[key]);
  				}
  				this.blogs = blogsArray;
  			})*/
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