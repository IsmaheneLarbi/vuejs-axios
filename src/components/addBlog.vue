<template>
	<div id="add-blog">
		<h2>Add a New Blog Post</h2>
		<form v-show = "!submitted">
			<label>Blog Title:</label>
			<input type="text" v-model.lazy="blog.title" required/>
			<label>Blog Content</label>
			<textarea v-model.lazy="blog.content"></textarea>
			<div id="checkboxes">
				<label>Ninjas</label>
				<input type="checkbox" value="ninjas" v-model="blog.categories"/>
				<label>Wizards</label>
				<input type="checkbox" value="wizards" v-model="blog.categories"/>
				<label>Super heroes</label>
				<input type="checkbox" value="super heroes" v-model="blog.categories"/>			
				<label>Coders</label>
				<input type="checkbox" value="coders" v-model="blog.categories"/>
			</div>
			<label>Author:</label>
			<select v-model="blog.author">
				<option v-for="author in authors">{{author}}</option>
			</select>
			<button v-on:click.prevent="post">Add Blog</button>
		</form>
		<div v-show="submitted">
			<h3>Thanks for posting! :)</h3>
		</div>
		<div id="preview">
			<h3>Preview Blog</h3>
			<p>Blog Title:{{blog.title}}</p>
			<p>Blog content:</p>
			<p>{{blog.content}}</p>
			<p>Blog Categories</p>
			<ul>
				<li v-for="category in blog.categories">{{category}}</li>
			</ul>
			<p>Author: {{blog.author}}</p>
		</div>
	</div>	
</template>

<script>

import axios from 'axios'

	export default {
  data () {
    return {
    	blog:{
    		title:"binding is a two way street",
    		content:"this is a test to make sure I understand 2way-binding using v-model",
    		categories:[],
    		author:""
    	},
    	authors:["The Net Ninja", "The Angular Avenger", "The Killer of Bill", "The Weeknd", "Frank Ocean"],
    	submitted: false,
  };
},
  methods:{
  	post(){
  		/*this.$http.post("https://blog-e02b7.firebaseio.com/posts.json", this.blog).then(function(data){
  			console.log(data);
  			this.submitted = true;
  		});*/
  		axios.post("https://blog-e02b7.firebaseio.com/posts.json", this.blog).then((data) =>{
  			console.log(data);
  			this.submitted = true;
  			console.log(this.submitted);
  		});
  	}
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
	display: inline-block;
	margin-right: 10px;
}
#checkboxes label{
	display: inline-block;
}


</style>