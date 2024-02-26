<template>
 <div class="container">
	<div 
		class="item" 
		:class="{expand: item.expand}"
		v-for="item in items" 
		:key="item.title" 
		@mouseenter="handleMouseEnter"
	>
		<h2 class="item__title">{{ item.title }}</h2>
		<div class="item__img">
			<img :src="`/img/${item.img}`" :alt="item.title">
		</div>
		<a href="#" class="item__btn">Купить</a>
	</div>	
 </div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: 'Playstation 5',
					img: 'playstation.jpg',
					expand: false,
				},
				{
					title: 'XBox SeriesX',
					img: 'xbox.jpg',
					expand: false,
				},
			]
		}
	},
	methods: {
		handleMouseEnter(e) {
			let target = e.target
			let title = target.querySelector('.item__title')
			if (title) {
				for (let item of this.items) {
					if (item.title === title.textContent) {
						item.expand = true
					} else {
						item.expand = false
					}
				}				
			}
		},		
	}
}
</script>


