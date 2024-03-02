<template>
	<app-title>Часто задаваемые вопросы</app-title>
	<app-item :class="{expanded: item.isExpanded}" v-for="(item,index) in qa" :key="index">
		<template v-slot:qa>
			<app-para class="item__q">{{ item.question }}</app-para>
			<app-para v-show="item.isExpanded" class="item__a">{{ item.answer }}</app-para>
		</template>
		<template v-slot:btns>
			<app-button v-if="!item.isExpanded" @click="item.isExpanded = true">
				<app-button-icon class="icon-down"></app-button-icon>
			</app-button>
			<app-button v-else @click="item.isExpanded = false">
				<app-button-icon class="icon-close"></app-button-icon>
			</app-button>
		</template>
	</app-item>		
</template>

<script>
import AppTitle from './components/AppTitle.vue'
import AppItem from './components/AppItem.vue'
import AppButton from './components/AppButton.vue'
import AppButtonIcon from './components/AppButtonIcon.vue'
import AppPara from './components/AppPara.vue'
import {qa} from './assets/data.js'

export default {
	components: {
		AppTitle, AppItem, AppButton, AppButtonIcon, AppPara,
	},
	data() {
		return {
			qa,
		}
	},	
}
</script>


