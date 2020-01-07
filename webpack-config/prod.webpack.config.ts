import webpack    from 'webpack';
import baseConfig from './base.webpack.config';

const config: webpack.Configuration = {
	...baseConfig,
	mode: 'production',

	output: {
		...baseConfig.output,
		filename: 'prod.bundle.js',
	},
};

export default config;
