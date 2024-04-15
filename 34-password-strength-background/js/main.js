Vue.createApp({
	data() {
		return {	
			password: '',
			strength: 16,	
			counter: 0,
		}
	},		
	methods: {
		setCounter() {
			if (this.counter <= this.strength) {				
				this.counter =  this.strength - this.password.length
			}
			if (this.password.length > this.strength) {
				this.counter = 0
			}			
		}
	},
	mounted() {
		this.counter = this.strength
	},
}).mount('#app')


 