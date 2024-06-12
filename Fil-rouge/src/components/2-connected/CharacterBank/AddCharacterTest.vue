<template>
	<div>
		<form @submit.prevent="saveArticle" >
			<input v-model="article.title" placeholder="Title"/>
			<input v-model="article.desription" placeholder="Description"/>
			<button >button</button>
		</form>
	</div>
</template>

<script>
import ArticleDataService from '../../../services/CharactersDataService';


export default {
	name : "add-article",
    data(){
        return{
            
			submitted : false,
			article : {
				title : "",
				published : false,
				}
        }
    },
    methods:{
		saveArticle(){
			const data = {
				title : this.article.title,
				desription : this.article.desription,
				published : false
			}
			ArticleDataService.create(data).then(()=>{
				this.submitted = true;
				console.log('Article créé');
			}).catch(error=>{
				  console.log(error);
			});
		},
    },
}
</script>

<style scoped lang="css">
</style>