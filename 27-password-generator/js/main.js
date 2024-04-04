const SYMBOLS = '!@#$%^&*(){}[]=<>/,.'
const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789'

Vue.createApp({
	data() {
		return {	
			password: '',
			password_arr: [],
			password_length: 6,
			password_min_length: 6,
			password_max_length: 20,
			letters_lower: LETTERS,
			letters_upper: LETTERS.toUpperCase(),
			numbers: NUMBERS,
			symbols: SYMBOLS,
			lower_check: true,
			upper_check: true,
			numbers_check: true,
			symbols_check: true,
		}
	},	
	methods: {
		randomElem(str) {
			let elem = ''
			const length = str.length
			const index = parseInt(Math.random()*length)
			elem = str.slice(index, index + 1)
			this.password_arr.push(elem)				
		},
		generatePassword() {
			this.password_arr = []		

			for (let i = 0; i < this.password_max_length; i++){				
				if (this.lower_check) {
					this.randomElem(this.letters_lower)
					if(this.password_arr.length >= this.password_length) {
						break
					}
				}		
				if (this.upper_check) {
					this.randomElem(this.letters_upper)
					if(this.password_arr.length >= this.password_length) {
						break
					}
				}			
				if (this.numbers_check) {
					this.randomElem(this.numbers)
					if(this.password_arr.length >= this.password_length) {
						break
					}
				}			
				if (this.symbols_check) {
					this.randomElem(this.symbols)
					if(this.password_arr.length >= this.password_length) {
						break
					}
				}								
			}
			this.password__arr = shuffle(this.password_arr)
			this.password = this.password_arr.join('')
		},
		copyClipboard() {	  
			if(!this.password) { return }
	  
			navigator.clipboard.writeText(this.password)
			alert('Пароль скопирован!')
	  },
	},		
}).mount('#app')

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
	return array;
 }