Vue.createApp({
	data() {
		return {		
			str: 'Мы любим программировать на Vue.js!',
			sub: '',			
			count: 1,
			duration_init: 500,
			duration: 500,
			duration_inc: 1,
		}
	},	
	methods: {
		handleDuration() {
			this.duration = parseInt(this.duration_init / this.duration_inc)
		},
		writeText() {
			this.count++
			if (this.count === this.str.length + 1) {
				this.count = 0
			}
			this.sub = this.str.slice(0, this.count)
			
			setTimeout(this.writeText, this.duration)
		},
	},	
	mounted() {		
		this.writeText()
	},	
	
}).mount('#app')