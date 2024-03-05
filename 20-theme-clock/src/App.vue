<template>
	<div class="clock" :class="{dark: themeToggle}">
		<button 
		class="clock__btn icon-dark-light"
		:class="{dark: !themeToggle}" 
		@click.prevent="themeToggle = !themeToggle"
		></button>		
		<div class="clock__face">
			<template v-for="line,i in 12">
				<div 
					class="line" 
					:class="{dark: !themeToggle}"
					:style="`transform: rotate(${i*30}deg)`"
				></div>
			</template>
			<div 
				class="hour-hand" 
				:class="{dark: !themeToggle}"
				:style="`transform: translateY(-2px) rotateZ(${scale(hours%12,0,11,0,360)-90}deg)`" 				
			></div>
			<div 
				class="minute-hand" 
				:class="{dark: !themeToggle}"
				:style="`transform: translateY(-1px) rotateZ(${scale(minutes,0,59,0,360)-90}deg)`"
			></div>
			<div class="second-hand" :style="`transform: translateY(-.5px) rotate(${scale(seconds,0,59,0,360)-90}deg)`"></div>
			<div class="center":class="{dark: !themeToggle}"></div>
		</div>
		<div class="clock__time">
			{{ calcHours }}:{{ calcMinutes }}
		</div>
		<div class="clock__text">
			<span class="clock__date">{{ date }}</span> {{ month }}, {{ day }}
		</div>
	</div>
</template>

<script>
import {months, days} from './assets/helpers/functions.js'
export default {
	name: 'App',
	data() {
		return {
			themeToggle: false,
			month: '',
			date: '',
			day: '',
			hours: '',
			minutes: '',
			seconds: '',
		}
	},
	computed: {
		calcHours() {
			return String(this.hours).length === 1 ? `0${this.hours}` : this.hours
		},
		calcMinutes() {
			return String(this.minutes).length === 1 ? `0${this.minutes}` : this.minutes
		},		
	},
	methods: {
		setTime() {
			let date = new Date()			
			this.month = months[date.getMonth()]			
			this.date = date.getDate()
			this.day = days[date.getDay()]			
			this.hours = date.getHours()			
			this.minutes = date.getMinutes()			
			this.seconds = date.getSeconds()
		},
		scale(num, in_min, in_max, out_min, out_max){
			return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		},
	},
	mounted() {
		this.setTime()
		setInterval(() => {
			this.setTime()
		},1000)
	}
}
</script>
