import path                from 'path';
import webpack             from 'webpack';
import baseConfig          from './base.webpack.config';
import { SRC_FOLDER_PATH } from '.';


const config: webpack.Configuration = {
  ...baseConfig,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(SRC_FOLDER_PATH, 'dist'),
    port: parseInt(process.env.UI_ADMIN_PANEL_DEV_SERVER_PORT) || 9000,
    compress: true,
    hot: true,
    noInfo: false,
    quiet: false
  },
  output: {
    ...baseConfig.output,
    filename: "dev.bundle.js"
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(),         // readable module names
  ]
}

export default config;
