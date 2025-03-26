module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true, project: './tsconfig.json' },
    },
  },
  plugins: ['import'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/no-extraneous-dependencies': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@*',
            group: 'external',
            position: 'after',
          },
        ],
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'internal',
          'index',
          'type',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: ['./src/shared'],
            from: [
              './src/entities',
              './src/features',
              './src/widgets',
              './src/pages',
              './src/app',
            ],
            message: 'Импорт из других слоев запрещен в слой shared',
          },
          {
            target: ['./src/entities'],
            from: [
              './src/features',
              './src/widgets',
              './src/pages',
              './src/app',
            ],
            message:
              'Импорт из слоев features, widgets, pages или app запрещен в слой entities',
          },
          {
            target: ['./src/features'],
            from: ['./src/widgets', './src/pages', './src/app'],
            message:
              'Импорт из слоев widgets, pages или app запрещен в слой features',
          },
          {
            target: ['./src/widgets'],
            from: ['./src/pages', './src/app'],
            message: 'Импорт из слоев pages или app запрещен в слой widgets',
          },
          {
            target: ['./src/pages'],
            from: ['./src/app'],
            message: 'Импорт из слоя app запрещен в слой pages',
          },
        ],
      },
    ],
  },
};
