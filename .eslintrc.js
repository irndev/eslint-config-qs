module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    process: true,
  },
  extends: ['eslint:recommended'],
  plugins: [
    'import',
    'promise',
  ],
  rules: {
    // MAIN
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    // strict: ['error', 'global'],
    'max-len': ['error', { code: 120 }],

    // STRINGS
    'template-curly-spacing': ['error', 'never'],
    'prefer-template': 'error',

    // VARIABLES
    'one-var': ['error', 'never'],
    'prefer-const': 'error',

    // FUNCTIONS
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'no-param-reassign': 'error',

    // ARROWS
    'prefer-arrow-callback': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'arrow-parens': ['error', 'as-needed'],

    // OBJECT & ARRAYS
    'object-shorthand': 'error',
    'quote-props': ['error', 'as-needed'],
    'array-callback-return': 'error',
    'dot-notation': 'error',

    // CONDITIONS
    eqeqeq: 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'default-case': 'error',

    // SPACING
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': 'error',
    'eol-last': ['error', 'always'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-whitespace-before-property': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 1 }],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'function-paren-newline': ['error', 'multiline'],
    'object-curly-spacing': ['error', 'always'],
    'block-spacing': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'no-trailing-spaces': 'error',
    'comma-style': ['error', 'last'],

    // OTHERS
    radix: ['error', 'as-needed'],
    'max-classes-per-file': ['error', 1],
    camelcase: ['error', { properties: 'always' }],
    'new-cap': ['error', { newIsCap: true, capIsNew: true }],
    'comma-dangle': ['error', 'always-multiline'],
    // IMPORT
    // "import/no-unresolved": "error", bugg
    'import/default': 'error',
    'import/export': 'error',
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    // "import/no-namespace": "error",
    'import/no-unassigned-import': ['error', { allow: ['**/*.scss', '**/*.css'] }],
    'import/newline-after-import': ['error', { count: 2 }],
    'import/group-exports': 'error',

    // PROMISE
    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error',
  },
}
