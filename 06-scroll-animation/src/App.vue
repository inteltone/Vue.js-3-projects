<template>
 <h1>Анимация по скроллу (GSAP)</h1>
 <div 
	class="box" 
	v-for="(box,index) in boxes" 
	:key="index"
	@scroll="handleScroll()"
 >{{ `${text} ${index+1}` }}</div>
</template>

<script>
export default {
	data() {
		return {
			boxes: 20,
			text: 'Блок',			
		}
	},	
}
</script>


