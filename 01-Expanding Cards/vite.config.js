import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'

export default defineConfig({
	plugins: [vue()],
	css: {
		postcss: {
		  plugins: [
			 autoprefixer
		  ],
		}
	 }
})
