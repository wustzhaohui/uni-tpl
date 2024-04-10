import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					hack: `true; @import (reference) "${path.resolve('src/assets/css/common.less')}";`,
				},
			},
		},
	},
});
