import {
	defineConfig
} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [
		uni(),
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/, /\.vue\?vue/, // .vue
				/\.nvue$/, /\.nvue\?nvue/, // .nvue
			],
			imports: [
				'vue',
				'vuex'
			]
		})
	]
})
