Vue.createApp({
	data() {
		return {	
			colors: ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'],
		}
	},		
	methods: {
		randomArrayIndex() {				
			return Math.floor(Math.random() * this.colors.length)
		},
		mouseover(e) {
			let target = e.currentTarget
			let color = this.colors[this.randomArrayIndex()]			
			target.style.setProperty('--color', `${color}`)
		},		
	},	
}).mount('#app')


 