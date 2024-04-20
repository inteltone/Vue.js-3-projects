Vue.createApp({
	data() {
		return {	
			isClicked: false,
		}
	},		
	methods: {
		createBoxes(index) {
			let x = index % 4
			let y = Math.floor(index / 4)
			return `background-position: ${-x * 125}px ${-y * 125}px`		 
		 }
	},	
}).mount('#app')


 