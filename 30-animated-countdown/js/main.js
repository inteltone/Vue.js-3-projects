Vue.createApp({
	data() {
		return {	
			isReady: false,
			number_init: 3,
			counter: 0,
			repeat: 0,
			duration: 1,
			seconds_end: 'секунды',
		}
	},		
	methods: {
		setNumber() {
			this.counter = this.number_init
		},
		setRepeat() { 
			this.repeat = this.counter + 1
		},
		setSecondsEnd() {
			switch (this.number_init) {
				case 1: this.seconds_end = 'секунда'
				break
				case 2:
				case 3:
				case 4: this.seconds_end = 'секунды'
				break
				default: this.seconds_end = 'секунд'				
			}
		},
		go() {
			this.setNumber()
			this.setRepeat()
			// this.setSecondsEnd()
			this.isReady = !this.isReady
			let intervalId = setInterval(() => {
				this.counter -= 1				
				if (this.counter < 0) {
					clearInterval(intervalId)
					this.setNumber()
					this.setRepeat()
				}				
			}, this.duration * 1000)
			setTimeout(() => {
				this.isReady = !this.isReady
			},this.repeat * 1000)
		},		
	},
	mounted() { 		
		this.go()
  }, 
}).mount('#app')