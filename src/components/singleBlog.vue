<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
		<p>Author: {{blog.author}}</p>
		<ul v-show="blog.categories">
			<li v-for="categeory in blog.categories"></li>
		</ul>
	</div>
</template>

<script>

import axios from 'axios';
	export default{
		data(){
			return {
				id:this.$route.params.id,
				blog:{
				}
			};
		},
		created(){
			let self = this;
			/*this.$http.get("https://blog-e02b7.firebaseio.com/posts/" + this.id + ".json").then(function(data){
				return data.json();
			}).then(function(data) {
				this.blog = data;
			});*/
			axios.get("https://blog-e02b7.firebaseio.com/posts/" + this.id + '.json').then(function(data){
				self.blog = data.data;
			})
		}
	}
</script>

<style>
	#single-blog{
		max-width: 960px;
		margin: 0 auto;
	}
</style>