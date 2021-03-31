module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error'],
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'comma-spacing': [ // 逗号前后的空格
      2, {
        'before': false,
        'after': true
      }
    ],
    'array-bracket-spacing': [2, 'never'],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': 2,
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!'] }],
    // 不允许多个空行
    'no-multiple-empty-lines': [2, { 'max': 1 }]
  }
};