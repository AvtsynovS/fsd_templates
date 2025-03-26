import path from 'path';

export const paths = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  fonts: path.join('fonts', '[name].[contenthash][ext]'),
  icons: path.join('icons', '[name].[contenthash][ext]'),
};
