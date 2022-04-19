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
		{
			name: 'my-plugin',
			enforce: 'pre',
			transform(code, id) {
				if (id.includes('/pages/') && (/\.vue$/.test(id) || /\.nvue$/.test(id))) {
					// console.log(id, code)
				}
				return
			}
		},
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/, /\.vue\?vue/, // .vue
				/\.nvue$/, /\.nvue\?nvue/, // .nvue
			],
			imports: [
				'vue',
				'pinia'
			]
		})
	]
})
