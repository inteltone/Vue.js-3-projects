Vue.createApp({
	data() {
		return {	
			is_0: false,
			is_1: false,
			is_2: false,
		}
	},		
	beforeUpdate() {
		let wraps = document.querySelectorAll('.input-wrap')
		if (this.is_0 && this.is_1 && this.is_2) {
			if (!wraps[0].classList.contains('active')) {
				this.is_2 = false
			}
			if (!wraps[1].classList.contains('active')) {
				this.is_0 = false
			}
			if (!wraps[2].classList.contains('active')) {
				this.is_1 = false
			}
		}		
	}
}).mount('#app')