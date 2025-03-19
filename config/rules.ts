import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { paths } from '../config/paths.ts';

import { EnvType } from './types.ts';

const svgLoaders = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        // Опция позволяет корректно задавать размер иконки
        icon: true,
        // Плагин позволяет корректно работать с цветом иконки
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: { currentColor: true },
            },
          ],
        },
      },
    },
    {
      loader: 'file-loader',
      options: {
        name: 'icons/[name].[contenthash].[ext]',
      },
    },
  ],
};

const cssLoader = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
  // use: ["style-loader", "css-loader"],
};

// Настройка babel и добавление поддержки react
// babel/preset-typescript - поддержка TS
const babelLoader = {
  test: /\.(t|j)sx?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
        // plugins: [require.resolve("react-refresh/babel")].filter(
        //   Boolean,
        // ),
      },
    },
  ],
  exclude: /node_modules/,
};

// Согласно документации webpack file-loader устарел и необходимо
// Использовать type "asset/resource"
// file-loader позволяет положить картинки в отдельную папку
const pictureLoader = {
  test: /\.(?:gif|png|jpg|jpeg)$/i,
  type: 'asset/resource',
  // use: [
  //   {
  //     loader: "file-loader",
  //     options: {
  //       name: "assets/[name].[contenthash].[ext]",
  //     },
  //   },
  // ],
};

const iconLoader = {
  test: /\.ico$/i,
  type: 'asset/resource',
  generator: {
    filename: paths.icons,
  },
};

// asset/resource копирует файлы в указанный с помощью assetModuleFilename каталог.
const fountAssetsLoader = {
  test: /\.(woff2?|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: paths.fonts,
  },
};

// Так тоже работает
// asset/inline - встраиваются в код бандла как url
// asset/source - файлы встраиваются без преобразований
// const fontLoader = {
//   test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
//   type: 'asset/inline',
//   resourceQuery: /url/,
// };

export const rules = (env: EnvType) => {
  return [
    pictureLoader,
    iconLoader,
    fountAssetsLoader,
    svgLoaders,
    cssLoader,
    babelLoader,
  ];
};
