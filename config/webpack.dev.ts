import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  Configuration as WebpackConfiguration,
} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { paths } from './paths';
import { rules } from './rules';
import { aliases } from './aliases';
import { argv, EnvType } from './types';
require('dotenv').config({ path: './.env.development' });

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

// TODO Настроить Webpack config
// TODO Разделить на dev и prod
// TODO Настроить шрифты
// TODO Выделить общую конфигурацию в отдельный файл

const PORT = process.env.REACT_APP_PORT || 3000;

const config = (env: EnvType, argv: argv): Configuration => {
  return {
    mode: env?.production ? 'production' : 'development',
    entry: `${paths.src}/index.tsx`,
    output: {
      // filename: "[name].[contenthash].js",
      path: paths.build,
      // assetModuleFilename: "images/[name][ext]",
      clean: true,
    },
    module: {
      rules: rules(env),
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.json'],
      alias: aliases,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'webpack-config',
        inject: 'body',
        template: `${paths.public}/index.html`,
        favicon: `${paths.public}/favicon.ico`,
        manifest: `${paths.public}/manifest.json`,
        minify: true,
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: '[id].css',
      }),
      new HotModuleReplacementPlugin(),
      new DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
    // настраивает корректный стек-трейс для отслеживания ошибок в исходных файлах, вместо бандла
    devtool: 'inline-source-map',
    devServer: {
      port: PORT,
      hot: true,
      static: {
        directory: paths.build, // Каталог для статики
      },
      open: true, // Автоматически открывать браузер
    },
    optimization: {
      // minimize: false,
      // runtimeChunk: false,
      // sideEffects: true,
      minimizer: [
        new CssMinimizerPlugin({
          parallel: true,
        }),
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};

export default config;
