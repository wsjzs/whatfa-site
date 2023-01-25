module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'require-await': 0,
    'vue/multi-word-component-names': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 允许使用console
    // 'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-v-model-argument': 'off',
    // 解决eslint 与 prettier冲突
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        htmlWhitespaceSensitivity: 'ignore',
        semi: false,
      },
    ],
  },
}
