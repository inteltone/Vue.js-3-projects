<template>
 <div class="counter-container">
	<div class="counter-img" :style="{filter: `blur(${updateBlur()}px)`}"></div>
	<div class="counter" :style="{opacity: updateOpacity()}">{{loading}}%</div>
 </div>
</template>

<script>
export default {
	data() {
		return {
			steps: 100,
			step: 50,
			loading: 0,
			blur: 20,
			ratio: ()=> {return this.steps / this.blur }
		}
	},
	methods: {
		updateOpacity() {
			let opacity = ((this.steps - this.loading) * .01).toFixed(1)
			return opacity
		},
		updateBlur() {			
			return this.blur - this.loading / this.ratio()
		},
	},
	mounted() {
		let timerId = setInterval(() => {
			this.loading++
			if (this.loading === this.steps) {
				clearInterval(timerId)
			}
		}, this.step)		
	}
}
</script>


