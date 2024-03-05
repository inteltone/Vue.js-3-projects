<template>
	<div class="slider" :style="`background-image: url(./img/${imgs[ind].name}.avif)`">
		<button class="slider__btn icon-arrow-left" @click="increaseInd()"></button>
		<div class="slider__img">
			<img :src="`./img/${imgs[ind].name}.avif`" :alt="imgs[0].alt">
		</div>
		<button class="slider__btn icon-arrow-right" @click="decreaseInd()"></button>
	</div>
</template>

<script>
import {images} from './assets/data.js'
export default {
	name: 'App',
	data() {
		return {
			imgs: images,
			ind: 0,
		}
	},
	methods: {
		increaseInd() {
			if (this.ind === this.imgs.length - 1) {
				this.ind = 0
				return
			}
			this.ind++
		},
		decreaseInd() {
			if (this.ind === 0) {
				this.ind = this.imgs.length - 1
				return
			}
			this.ind--
		},
	}
}
</script>
