const SLIDES = [
	{
		img: '01',
		title: 'Летящий орел',
		text: 'на закате',
		color: '#FFB866',
	},
	{
		img: '02',
		title: 'Одинокий замок',
		text: 'в дикой природе',
		color: '#252E33',
	},
	{
		img: '03',
		title: 'Синее небо',
		text: 'с горами на его фоне',
		color: '#2A86BA',
	},
	{
		img: '04',
		title: 'Живой цветок',
		text: 'все в розовом',
		color: '#FD3555',
	},
]

const app = Vue

app.createApp({
	data() {
		return {
			slides: SLIDES,
			step: 0,
			total: 0,
			count: 0,
		}
	},	
	methods: {
		getStep() {
			this.step = window.innerHeight
		},	
		calcTotalNext() {
			this.count++			
			if (this.count === this.slides.length) {
				this.count = 0
			}	
			this.total = this.step * this.count
		},
		calcTotalPrev() {
			this.count--
			if (this.count === -1) {
				this.count = this.slides.length - 1
			}	
			this.total = this.step * this.count
		},
	},
	created() {
		this.getStep()
		window.addEventListener("resize", this.getStep);
	 },
	destroyed() {
		window.removeEventListener("resize", this.getStep);
	},
}).mount('#app')