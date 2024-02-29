<template>
	<div class="lang">
		<button @click="handleRu">ru</button>|<button @click="handleEn">en</button>
	</div>
	<p class="title">
		<span v-if="!lang">Read and think about it!</span>
		<span v-else>Прочитай и задумайся!</span>	
	</p>
	<p class="quote">{{obj.quoteText}}</p>
	<p v-if="obj.quoteAuthor" class="author">{{obj.quoteAuthor}}</p>
	<p v-else class="author">
		<span v-if="!lang">Author unknown</span>
		<span v-else>Автор не известен</span>
	</p>
	<button class="btn" @click="getQuote">
		<span v-if="!lang">Next quote</span>
		<span v-else>Следующая цитата</span>
	</button>
</template>

<script>
let lang = 'ru'
const URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
export default {
	data() {
		return {			
			obj: {
				quoteText: 'Всегда выбирайте самый трудный путь — там вы не встретите конкурентов.',
				quoteAuthor: 'Шарль де Голль'
			},	
			lang: true,
		}
	},
	methods: {
		getQuote() { 
			fetch(`https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=${this.lang?'ru':'en'}`)
				.then(response => response.json())
				.then(data => {
					this.obj = data
				});
		},
		handleRu() {
			this.lang = true
			this.getQuote()
		},
		handleEn() {
			this.lang = false
			this.getQuote()
		},
	},	
}
</script>


