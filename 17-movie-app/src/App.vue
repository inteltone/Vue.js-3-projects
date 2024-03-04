<template>
	<app-header>
		<app-form>
			<input type="text" id="search" class="search" placeholder="Поиск..." v-model="searchText">
		</app-form>
	</app-header>
	<app-main>		
		<app-movie v-for="el in movies">
			<app-img :src="el.poster.previewUrl" :alt="el.name"/>
			<app-info>
				<app-title>{{ el.name }}</app-title>
				<app-span>{{ el.rating.kp }}</app-span>
			</app-info>
			<app-overview>
				<app-inner>
					<app-title>Содержание</app-title>
					{{ el.description }}
				</app-inner>
			</app-overview>
		</app-movie>
	</app-main>
</template>

<script>
import { useEventListener } from '@vueuse/core'
import AppHeader from './components/AppHeader.vue'
import AppForm from './components/AppForm.vue'
import AppInput from './components/AppInput.vue'
import AppMain from './components/AppMain.vue'
import AppMovie from './components/AppMovie.vue'
import AppImg from './components/AppImg.vue'
import AppInfo from './components/AppInfo.vue'
import AppOverview from './components/AppOverview.vue'
import AppTitle from './components/AppTitle.vue'
import AppInner from './components/AppInner.vue'
import AppSpan from './components/AppSpan.vue'
export default {
	name: 'App',
	components: {
		AppHeader, AppForm, AppInput, AppMain, AppMovie, AppImg, AppInfo, AppOverview, AppTitle, AppInner, AppSpan,
	},
	data() {
		return {
			searchText: '',
			url: 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20&type=cartoon',
			searchApi: 'https://api.kinopoisk.dev/v1.4/movie/search?type=cartoon&selectFields=names.name&query=',
			movies: [],
		}
	},
	methods: {
		search(url) {	
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					'X-API-KEY': 'VQMQW9G-JA3MYP4-H9XAJGS-B9969MN'
				}
			}		
			fetch(url, options)
				.then(response => response.json())
				.then(data => this.movies = data.docs)
				.catch(err => console.error(err));

			if(this.searchText !== '') this.searchText = ''
		}
	},
	mounted() {		
		this.search(this.url)	
		// ---------------
		useEventListener(document, 'submit', (e) => {
			e.preventDefault()			
			this.search(this.searchApi + this.searchText)			
		})
	}
}
</script>
