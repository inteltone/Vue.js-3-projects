<template>
 <form>
	<div class="form-group">
		<input class="input" :class="{show: isShown}" type="text" placeholder="Поиск...">
		<button class="btn" @click.prevent="handleBtn"><span class="icon-search"></span></button>
	</div>
 </form>
</template>

<script>
export default {
	data() {
		return {
			isShown: false,
		}
	},
	methods: {
		handleBtn() {
			return this.isShown = !this.isShown
		}
	}
}
</script>


