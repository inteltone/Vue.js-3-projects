<template>
	<div class="item" v-for="item,i in socials" :key="i">
		<app-item class="item__icon" :class="item.icon"></app-item>
		<app-item class="item__num">{{ item.init }}</app-item>
		<app-item class="item__text">{{ item.desc }}</app-item>
	</div>
</template>

<script>
import AppItem from './components/AppItem.vue'
export default {
	name: 'App',
	components: {
		AppItem,
	},
	data() {
		return {
			socials: [
				{
					name: 'Twitter',
					desc: 'Читающих Twitter',
					icon: 'icon-twitter',
					init: 0,
					total: 12000,
				},
				{
					name: 'YouTube',
					desc: 'Подписчиков на YouTube',
					icon: 'icon-youtube',
					init: 0,
					total: 5000,
				},
				{
					name: 'Facebook',
					desc: 'Фанатов на Facebook',
					icon: 'icon-facebook',
					init: 0,
					total: 7500,
				},
			]
		}
	},	
	mounted() {
		let intId = setInterval(() => {
			for(let el of this.socials){
				if (el.total > el.init) {					
					el.init += el.total / 100
				} else {
					clearInterval(intId)
					return
				}
			}			
		}, 30)
	}
}
</script>
