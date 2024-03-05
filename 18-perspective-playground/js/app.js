const vm = Vue.createApp({
	data() {
		return {
			x: 0,
			y: 0,
			z: 0,
			perspective: 500,
		}
	},
	computed: {
		updateBoxStyle() {
			return {
				transform: `perspective(${this.perspective}px) rotateX(${this.x}deg) rotateY(${this.y}deg) rotateZ(${this.z}deg)`,
			}
		}
	},
	methods: {
		reset() {			
				this.x = 0
				this.y = 0
				this.z = 0
				this.perspective = 500			
		},
		copy() {
			let text = `transform: ${this.updateBoxStyle.transform};`
			navigator.clipboard.writeText(text)
		}
	}
})
vm.mount('#app')