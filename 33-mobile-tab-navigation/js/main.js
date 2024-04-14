Vue.createApp({
	data() {
		return {	
			tabs: [
				{
					img: 'home',
					icon: 'home',
					name: 'Дом',
					isVisible: true,
				},
				{
					img: 'work',
					icon: 'work',
					name: 'Работа',
					isVisible: false,
				},
				{
					img: 'blog',
					icon: 'blog',
					name: 'Блог',
					isVisible: false,
				},
				{
					img: 'about-us',
					icon: 'about-us',
					name: 'О нас',
					isVisible: false,
				},
			]
		}
	},		
	methods: {
		handleTab(index) {
			if(this.tabs[index].isVisible === true) return
			this.tabs.forEach(tab => {
				tab.isVisible = false
			})
			this.tabs[index].isVisible = true
		}
	},	
}).mount('#app')


 