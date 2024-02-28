let app = Vue.createApp({
	data() {
		return {
			tasks: [],
			task: '',			
		}
	},	
	computed: {
		calcCurrent() {
			let current = 0
			for (let task of this.tasks) {
				if(!task.isActive) current++
			}
			return current
		},
		calcDone() {
			let done = 0
			for (let task of this.tasks) {
				if(task.isActive) done++
			}
			return done
		},
	},
	methods: {
		addItem() {
			if (this.task === '') return			
			this.tasks.push({ id: this.task, text: this.task, isActive: false })
			this.task = ''
		},
		clearInput() {
			this.task = ''
		},		
		deleteItem(text) {
			for (let item of this.tasks) {
				if (text === item.text) {
					let index = this.tasks.indexOf(item)
					this.tasks.splice(index, 1)
				}
			}			
		},
		deleteAll() {
			this.tasks = []
		}
	},	
})

app.mount('#app')

