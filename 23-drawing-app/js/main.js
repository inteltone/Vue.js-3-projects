Vue.createApp({
	data() {
		return {
			canvas: null,			
			size: 5,
			min_size: 5,
			max_size: 50,
			increment: 5,
			color: '#000000',
			is_pressed: false,
			x: 0,
			y: 0,
		}
	},
	methods: {
		increaseSize() {
			if (this.size < this.max_size) this.size += this.increment
		},
		decreaseSize() {
			if (this.size > this.min_size) this.size -= this.increment
		},
		handleMouseDown(e) {
			this.is_pressed = true
			this.x = e.offsetX
			this.y = e.offsetY	
		},
		handleMouseUp() {
			this.is_pressed = false
			this.x = undefined
			this.y = undefined
		},
		handleMouseMove(e) {
			if(this.is_pressed) {
				const x2 = e.offsetX
				const y2 = e.offsetY	 
				this.drawCircle(x2, y2)
				this.drawLine(this.x, this.y, x2, y2)	 
				this.x = x2
				this.y = y2
		  }
		},
		drawCircle(x, y) {
			let ctx = this.canvas;
			ctx.beginPath();
			ctx.arc(x, y, this.size, 0, Math.PI * 2)
			ctx.fillStyle = this.color
			ctx.fill()
		},	  
		drawLine(x1, y1, x2, y2) {
			let ctx = this.canvas;
			ctx.beginPath()
			ctx.moveTo(x1, y1)
			ctx.lineTo(x2, y2)
			ctx.strokeStyle = this.color
			ctx.lineWidth = this.size * 2
			ctx.stroke()
		},
		clearCanvas() {
			let c = document.querySelector('.app__canvas')
			c.width = c.offsetWidth
			c.height = c.offsetHeight
			this.canvas.clearRect(0, 0, c.width, c.height)	
		}
	},
	mounted() {
		let c = document.querySelector('.app__canvas')
		c.width = c.offsetWidth
		c.height = c.offsetHeight
		this.canvas = c.getContext('2d')		
	}
}).mount('#app')

const dialog = document.querySelector("dialog")

window.addEventListener('resize', () => {
	if (!dialog.hasAttribute('open')) {
		dialog.showModal()
		setTimeout(() => {
			dialog.close()
		},2000)
	}
})