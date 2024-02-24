<template>
 <div class="progress-container">
	<div class="progress">
		<div 
			class="progress__scale" 
			:style="{inlineSize: `${calcScale}%`}"
		></div>
	</div>
	<div 
		class="circle" 
		:class="{'circle--active': index <= step_current-1}"
		v-for="(step,index) in steps" 
		:key="index"
	>
		{{ index += 1 }}
	</div>
 </div>
 <div class="btns">
	<button
		class="btn" 
		:class="{'btn--active': step_current > 1}"
		:disabled="step_current === 1"
		@click.prevent="handlePrev"
	>
		Prev
	</button>
	<button 
		class="btn" 
		:class="{'btn--active': step_current < steps}" 
		:disabled="step_current === steps"
		@click.prevent="handleNext"
	>
		Next
	</button>
 </div>
</template>

<script>
export default {
	data() {
		return {
			step_current: 1,
			steps: 4,			
		}
	},
	computed: {
		calcScale() {
			return 100 / (this.steps - 1) * (this.step_current - 1)
		}
	},
	methods: {
		handlePrev() {
			if (this.step_current > 1) {				
				return this.step_current--
			}
		},
		handleNext() {
			if (this.step_current < this.steps) {				
				return this.step_current++
			}
		},
	}
}
</script>


