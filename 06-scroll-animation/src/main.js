import { gsap } from "gsap"   
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import { createApp } from 'vue'
import './assets/scss/main.css'
import App from './App.vue'

createApp(App).mount('#app')

let box_w = document.querySelector('.box').offsetWidth
let boxes = document.querySelectorAll('.box')
gsap.set(boxes, { x: gsap.utils.wrap([-box_w*2, box_w*2]), autoAlpha: 0 })

boxes.forEach(box => {
	ScrollTrigger.create({
		trigger: box,
		start: "top 80%",
		toggleActions: 'play none none reverse',
		animation: gsap.to( box, { x: 0, duration: .35, ease: 'back', autoAlpha: 1 } )
	})
})

