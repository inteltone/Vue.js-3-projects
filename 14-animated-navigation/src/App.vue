<template>
	<app-bg class="top"></app-bg>
	<app-nav :class="{shrinked: !isExpanded}">
		<app-menu :class="{expanded: isExpanded}">
			<div class="menu__content">
				<app-link v-for="item in items" :class="{hide: !isExpanded}" :href="item.href" target="_blank">{{item.name}}</app-link>
			</div>
		</app-menu>
		<app-burger @click="isExpanded = !isExpanded">
			<app-line class="burger__line up" :class="{rotate: !isExpanded}"></app-line>
			<app-line class="burger__line down" :class="{rotate: !isExpanded}"></app-line>
		</app-burger>
	</app-nav>
	<app-bg class="bottom"></app-bg>
</template>

<script>
import AppBg from './components/AppBg.vue'
import AppNav from './components/AppNav.vue'
import AppMenu from './components/AppMenu.vue'
import AppLink from './components/AppLink.vue'
import AppBurger from './components/AppBurger.vue'
import AppLine from './components/AppLine.vue'

export default {
	components: {
		AppBg, AppBurger, AppLine, AppNav, AppMenu, AppLink,
	},
	name: 'App',
	data() {
		return {
			isExpanded: true,
			items: [
				{
					name: 'Дом',
					href: 'https://google.com',
				},
				{
					name: 'Портфолио',
					href: 'https://yandex.ru',
				},
				{
					name: 'О\u00A0нас',
					href: 'https://inteltone.ru',
				},
				{
					name: 'Контакты',
					href: 'https://vueschool.io/',
				}
			],
		}
	}
}
</script>

