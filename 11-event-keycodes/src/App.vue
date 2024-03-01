<template>
	<p v-if="!key" class="intro">Нажмите любую клавишу, чтобы получить ее код</p>
	<div v-else class="container">
		<div class="item">
			<p class="title">event.key</p>
			<div class="code">{{ key }}</div>
		</div>
		<div class="item">
			<p class="title">event.keyCode</p>
			<div class="code">{{ keyCode }}</div>
		</div>
		<div class="item">
			<p class="title">event.code</p>
			<div class="code">{{ code }}</div>
		</div>
	</div>
</template>

<script>
import { useEventListener } from '@vueuse/core'

export default {
	data() {
		return {
			key: '',
			keyCode: 0,
			code: '',
		}
	},	
	mounted() {
		useEventListener(document, 'keydown', (e) => {
			this.key = e.key === ' ' ? 'Space' : e.key
			this.keyCode = e.keyCode
			this.code = e.code
		})
	}	
}
</script>


