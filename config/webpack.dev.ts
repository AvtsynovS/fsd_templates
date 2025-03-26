import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { aliases } from './aliases.ts';
import { paths } from './paths.ts';
import { rules } from './rules.ts';
import { argv, EnvType } from './types.ts';

dotenv.config({ path: './.env.development' });

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

// TODO Настроить Webpack config
// TODO Разделить на dev и prod
// TODO Настроить шрифты
// TODO Выделить общую конфигурацию в отдельный файл

const PORT = process.env.REACT_APP_PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const config = (env: EnvType, argv: argv): Configuration => {
  return {
    mode: env?.production ? 'production' : 'development',
    entry: `${paths.src}/index.tsx`,
    output: {
      publicPath: '/',
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
        title: 'FSD Template',
        inject: 'body',
        template: `${paths.public}/index.html`,
        favicon: `${paths.public}/favicon.ico`,
        manifest: `${paths.public}/manifest.json`,
        minify: true,
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: '[id].css',
        ignoreOrder: true,
      }),
      new DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
    // настраивает корректный стек-трейс для отслеживания ошибок в исходных файлах, вместо бандла
    devtool: 'inline-source-map',
    devServer: {
      host: HOST,
      port: PORT,
      hot: true,
      historyApiFallback: true,
      compress: true,
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
