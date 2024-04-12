Vue.createApp({
	data() {
		return {	
			slides: [
				{alt: 'фото 01',name: '01',},
				{alt: 'фото 02',name: '02',},
				{alt: 'фото 03',name: '03',},
				{alt: 'фото 04',name: '04',},
			],
			move: 0,
			slide_width: 400,
			interval: 0,
			speed: .3,
			duration: 3,
		}
	},		
	methods: {
		setInterval() {
			this.interval = setInterval(() => {
				this.move -= this.slide_width
				if (this.move <= -this.slide_width * this.slides.length) {
					this.move = 0
				}
			}, this.duration * 1000)
		},
		go() {
			clearInterval(this.interval)
			this.setInterval()
		},
		handlePrev() {
			if (this.move === 0) {
				this.move = -this.slide_width * (this.slides.length - 1)
			} else {
				this.move += this.slide_width
			}
			this.go()
		},
		handleNext() {
			if (this.move === -this.slide_width * (this.slides.length - 1)) {
				this.move = 0
			} else {
				this.move -= this.slide_width
			}
			this.go()
		},
	},
	mounted() { 		
		this.go()
  }, 
}).mount('#app')