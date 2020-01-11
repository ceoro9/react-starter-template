import path                       from 'path';
import webpack                    from 'webpack';
import HtmlWebpackPlugin          from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import {
	SRC_FOLDER_PATH,
	DIST_FOLDER_PATH,
	ROOT_PROJECT_PATH,
  NODE_MODULES_PATH,
  isProductionEnv
} from '.';

const config: webpack.Configuration = {
	entry: SRC_FOLDER_PATH,

	output: {
		path: DIST_FOLDER_PATH,
		publicPath: './',
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
      },
      {
        test: /\.s?css$/,
        include: [
		    	SRC_FOLDER_PATH,
				],
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: !isProductionEnv()
            }
          },
          {
            // supports latest css-loader version
            loader: '@teamsupercell/typings-for-css-modules-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProductionEnv()
            }
          }
        ]
      },
			{
				test: /\.tsx?$/,
				include: [
		    	SRC_FOLDER_PATH,
				],
				exclude: [
					NODE_MODULES_PATH,
				],
				use: [
					{
						loader: 'cache-loader',
					},
					{
						loader: 'thread-loader',
						options: {
							// there should be 1 cpu for the fork-ts-checker-webpack-plugin
							workers: require('os').cpus().length - 1,
							// set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
							// poolTimeout: Infinity
						},
					},
					{
						loader: 'ts-loader',
						options: {
							configFile: path.resolve(ROOT_PROJECT_PATH, 'tsconfig.json'),
							// disable type-checking(it handles on separate process by fork plugin)
							transpileOnly: true,
							// parallise building process
							happyPackMode: true,
						},
					},
				],
			},
		],
	},

	resolve: {
		modules: [
	    NODE_MODULES_PATH,
	    SRC_FOLDER_PATH,
		],
		extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.css',
      '.scss'
    ],
	},

	performance: {
		hints: 'warning',
		maxEntrypointSize: 2000000, // 2MB
		maxAssetSize: 5000000,      // 5MB
	},

	plugins: [
		// Generates html page with a resulting bundle
		new HtmlWebpackPlugin({
			template: path.resolve(SRC_FOLDER_PATH, 'index.html'),
		}),
		// Runs Typescript type-checker on a separate process
		new ForkTsCheckerWebpackPlugin({
			useTypescriptIncrementalApi: true,
			checkSyntacticErrors: true,
    }),
    // ignore typing for css modules
    new webpack.WatchIgnorePlugin([
      /s?css\.d\.ts$/
    ])
	],
};

export default config;
