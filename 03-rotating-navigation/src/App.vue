<template>
 <div class="page" :class="{'page--rotated': isShown}">
	<h1 class="page__title">Только в провинциях ещё есть чем поживиться</h1>
	<p class="page__author">Петр Иванов</p>
	<div class="page__content">
		<p>Значимость этих проблем настолько очевидна, что укрепление и развитие внутренней структуры, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для системы массового участия. Также как сплочённость команды профессионалов создаёт предпосылки для анализа существующих паттернов поведения. Однозначно, независимые государства призваны к ответу.</p>
		<h2 class="page__content-heading">Постоянный количественный рост бодрит</h2>
		<div class="page__img">
			<img src="/img/puppy.avif" alt="Щенок">
		</div>
		<p>Значимость этих проблем настолько очевидна, что укрепление и развитие внутренней структуры, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для системы массового участия. Также как сплочённость команды профессионалов создаёт предпосылки для анализа существующих паттернов поведения. Однозначно, независимые государства призваны к ответу.</p>
	</div>
 </div>
 <div class="burger" :class="{'burger--rotated': isShown}">
	<button class="icon-burger" data-burger @click.prevent="showMenu"></button>
	<button class="icon-close" data-close @click.prevent="hideMenu"></button>
 </div>
 <nav class="menu">
	<a 
		v-for="item in menu" 
		:key="item.text"
		href="#" 
		class="menu__item" 
		:class="{move: isShown}"
	>
	<span :class="`icon-${item.class}`"></span><span class="menu__text">{{ item.text }}</span> </a>
 </nav>
</template>

<script>
export default {
	data() {
		return {
			isShown: false,
			menu: [
				{
					text: 'Дом',
					class: 'home'
				},
				{
					text: 'О нас',
					class: 'user'
				},
				{
					text: 'Контакты',
					class: 'mail'
				},
			]
		}
	},	
	methods: {
		showMenu() {
			return this.isShown = true
		},
		hideMenu() {
			return this.isShown = false
		},
	}
}
</script>


