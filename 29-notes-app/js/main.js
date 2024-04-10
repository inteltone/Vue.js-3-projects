Vue.createApp({
	data() {
		return {	
			notes: [],			
		}
	},	
	methods: {
		createNote() {
			this.notes.push({ text: '', isHidden: false })
			localStorage.setItem('notes', JSON.stringify(this.notes));
		},	
		editNote(index) {
			this.notes[index].isHidden = !this.notes[index].isHidden
			localStorage.setItem('notes', JSON.stringify(this.notes)); 
		},
		deleteNote(index) {
			this.notes.splice(index, 1)
			localStorage.setItem('notes', JSON.stringify(this.notes)); 
		},
		deleteAllNotes() {
			this.notes = []
			localStorage.setItem('notes', JSON.stringify(this.notes)); 
		},
		saveToLocalStorage() {
			localStorage.setItem('notes', JSON.stringify(this.notes)); 
		}
	},
	mounted() {             
		this.notes = JSON.parse(localStorage.getItem('notes')) || []; 
  }, 
}).mount('#app')