<template>
  <section class="slider">	
	<div 
		class="slider__img" 
		:class="{expanded: photo.isExpanded}"
		v-for="(photo,index) in photos"
		:key="index"
		@click="handleClick(index)"
	>
		<img :src="`/img/${photo.name}`" :alt="photo.alt">
		<p class="slider__desc">{{ photo.desc }}</p>
	</div>
	</section>
</template>

<script>
import { photos } from './assets/data.js'

export default {
	data() {
		return {
			photos,			
		}
	},
	methods: {
		handleClick(index) {
			this.photos.forEach((photo, i) => {
				if (i === index) {
					photo.isExpanded = true
				} else {
					photo.isExpanded = false
				}
			})
		}
	}
}
</script>



