<template>
	<div class="title">
		<h1>Случайный выбор</h1>
		<p>Вводите варианты, разделяя их запятой (',').</p>
		<p>Закончив, нажмите Enter.</p>
	</div>
	<textarea class="textarea" placeholder="Вводите здесь..." v-model="text"></textarea>
	<p class="choices">				
		<template v-for="(item,index) in splitChoices" :key="index">
			<span v-if="item !== ''" class="choices__item">{{ item }}</span>
		</template>		
	</p>
	<p v-if="text.length === 0" class="choices">				
		<template v-for="(item,index) in arr" :key="index">
			<span class="choices__item" :class="{picked: index === picked}">{{ item }}</span>
		</template>		
	</p>
</template>

<script>
import { useEventListener } from '@vueuse/core'
export default {
	name: 'App',
	data() {
		return {
			arr: [],
			text: '',
			picked: undefined,
		}
	},
	computed: {
		splitChoices() {
			let temp = this.text.split(',')
			temp = temp.map(el => el.trim())
			return temp
		}
	},	
	methods: {
		selectRandomItem(arr) {
			this.picked = Math.floor(Math.random() * arr.length)
		},
	},
	mounted() {
		useEventListener(document, 'keydown', (e) => {
			if (e.key === 'Enter') {
				this.arr = this.text.split(',')
				this.arr = this.arr.map(el => el.trim())
				this.arr = this.arr.filter(el => el !== '')
				setTimeout(() => {
					this.text = ''					
				}, 0)
				let intId = setInterval(() => {					
					this.selectRandomItem(this.arr)
				}, 100)
				setTimeout(() => {
					clearInterval(intId)
				},3000)
			}
		})
	}
}
</script>




