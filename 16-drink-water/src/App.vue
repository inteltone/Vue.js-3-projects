<template>
	<app-title>Выпей воды</app-title>
	<app-subtitle>Цель: {{ total }} литра</app-subtitle>
	<app-vessel>
		<app-vessel-top :style="{height: 100 - drinked + '%'}">
			<app-span class="vessel__top-num">{{remained}}л</app-span>
			<app-span>осталось</app-span>
		</app-vessel-top>
		<app-vessel-bottom :style="{height: drinked + '%'}">
			<app-span>{{drinked}}%</app-span>
		</app-vessel-bottom>
	</app-vessel>
	<app-desc>Выберите количество стаканов, которые вы должны выпить</app-desc>
	<app-glasses>
		<app-glass 
			:class="{active: i <= ind}" v-for="glass,i in glasses" @click="handleClick(i)">			
		</app-glass>
	</app-glasses>
</template>

<script>
import AppTitle from './components/AppTitle.vue'
import AppSubtitle from './components/AppSubtitle.vue'
import AppVessel from './components/AppVessel.vue'
import AppVesselTop from './components/AppVesselTop.vue'
import AppVesselBottom from './components/AppVesselBottom.vue'
import AppSpan from './components/AppSpan.vue'
import AppDesc from './components/AppDesc.vue'
import AppGlasses from './components/AppGlasses.vue'
import AppGlass from './components/AppGlass.vue'
export default {
	name: 'App',
	components: {
		AppTitle, AppSubtitle, AppVessel, AppVesselTop, AppVesselBottom, AppSpan, AppDesc, AppGlasses, AppGlass,
	},
	data() {
		return {
			total: 2,
			glasses: 8,
			drinked: 0,
			remained: 2,
			ind: -1,
		}
	},	
	methods: {
		handleClick(i) {
			if (i === this.ind) {
				this.ind -= 1
				i--
			} else {
				this.ind = i
			}
			this.remained = this.total - ((i + 1) * (this.total / this.glasses))
			this.drinked = 100 - (this.remained / this.total) * 100
		},
	},	
}
</script>
