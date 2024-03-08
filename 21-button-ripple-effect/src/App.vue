<template>
	<button class="btn" @click="createCircle">Кликни</button>	
</template>

<script>
export default {
	name: 'App',	
	methods: {
		createCircle(e) {
			const x = e.clientX
			const y = e.clientY
			const buttonTop = e.target.offsetTop
			const buttonLeft = e.target.offsetLeft
			const xInside = x - buttonLeft
			const yInside = y - buttonTop
			let btn = document.querySelector('.btn')
			let circle = document.createElement('div')
			circle.classList.add('circle')
			circle.style.top = yInside + 'px'
			circle.style.left = xInside + 'px'			
			btn.appendChild(circle)
			setTimeout(() => {
				circle.remove()
			},500)
		}
	},	
}
</script>
