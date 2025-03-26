import path from 'path';

export const aliases = {
  '@app': path.resolve(__dirname, '../src/app'),
  '@pages': path.resolve(__dirname, '../src/pages'),
  '@widgets': path.resolve(__dirname, '../src/widgets'),
  '@features': path.resolve(__dirname, '../src/features/'),
  '@entities': path.resolve(__dirname, '../src/entities'),
  '@shared': path.resolve(__dirname, '../src/shared'),
};
