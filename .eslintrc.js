module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier', // Поддержка prettier как основного formatter
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist/', 'node_modules/'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto', // Установлено на 'auto', чтобы избежать проблем с различными системами
        singleQuote: true, // Использование одинарных кавычек
        trailingComma: 'all', // Добавление запятых в конце объектов и массивов
        arrowParens: 'avoid', // Упрощение стрелочных функций
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn', // Предупреждение, вместо ошибки, для типа any
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off', // Отключаем проверку non-null assertion
  },
};
