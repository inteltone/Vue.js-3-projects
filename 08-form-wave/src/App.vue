<template> 
	<div class="container" @click="handleClick">
		<form class="form">
			<p class="form__title">Вход в аккаунт</p>
			<div
				class="form__control"
				v-for="(input,index) in inputs"
				:key="index"
			>
				<label :for="input.name">
					<span
						:class="{move: input.focused || input.value}"
						:style="`transition-delay : ${index * 50}ms`"
						v-for="(letter,index) in input.label"
						:key="index"
					>{{ letter }}</span>
				</label>
				<input class="form__input" :type="input.name" :name="input.name" :id="input.name" v-model="input.value">
			</div>
			<button class="form__btn">Войти</button>
			<p class="form__info">Нет аккаунта? <a href="#">Регистрация</a></p>
		</form>
	</div> 
</template>

<script>
export default {
	data() {
		return {
			inputs: [
				{
					name: 'email',
					label: 'Email',
					focused: false,
					value: '',
				},
				{
					name: 'password',
					label: 'Пароль',
					focused: false,
					value: '',
				},
			],
		}
	},
	computed: {

	},
	methods: {		
		handleClick(e) {
			let target = e.target
			if (!target.classList.contains('form__input')) {
				for (let input of this.inputs) {				
					input.focused = false							
				}
				return	
			}
			let name = e.target.getAttribute('type')			
			for (let input of this.inputs) {
				if (name === input.name) {
					input.focused = true
				} else {
					input.focused = false
				}				
			}
		},		
	}
}
</script>


