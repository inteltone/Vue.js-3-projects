<script setup>
import { ref } from 'vue'
const ELEMS = 6
const i = ref(0)
const items = ref([])
const itemRefs = ref([])
function handleElem(index) {	
	if (typeof items.value[index] !== 'number') {
		items.value[index] = []
		return
	}
	if (typeof items.value[index] === 'number') {		
		if (index === ELEMS - 1) {
			items.value[index] %= 10
		} else {
			items.value[index] %= 10
			itemRefs.value[index + 1].focus()
			i.value = index + 1
		}
	}
}
function handleElemBackspace(index) {
	items.value.pop()
	i.value = index
	if (index !== 0) {		
		itemRefs.value[index - 1].focus()
		i.value = index - 1
		if (items.value[i.value]) {
			items.value.pop()
		}
	}
}
function elemClicked() {
	itemRefs.value[i.value].focus()
}
</script>
<template>	
		<input 
			type="number"
			class="app__item"
			:class="{filled: items[index]}"
			placeholder="0"
			ref="itemRefs"
			v-model="items[index]"
			v-for="(item, index) in ELEMS"
			@click.prevent="elemClicked"
			@input="handleElem(index)"
			@keyup.delete="handleElemBackspace(index)"
			:autofocus="index === 0"
		>		
</template>

