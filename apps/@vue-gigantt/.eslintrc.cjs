const vue = {
  'vue/no-multiple-template-root': 0,
  'vue/html-indent': ['error', 2],
  'vue/no-parsing-error': ['error', {
    'abrupt-closing-of-empty-comment': true,
    'absence-of-digits-in-numeric-character-reference': true,
    'cdata-in-html-content': true,
    'character-reference-outside-unicode-range': true,
    'control-character-in-input-stream': true,
    'control-character-reference': true,
    'eof-before-tag-name': true,
    'eof-in-cdata': true,
    'eof-in-comment': true,
    'eof-in-tag': true,
    'incorrectly-closed-comment': true,
    'incorrectly-opened-comment': true,
    'invalid-first-character-of-tag-name': true,
    'missing-attribute-value': true,
    'missing-end-tag-name': true,
    'missing-semicolon-after-character-reference': true,
    'missing-whitespace-between-attributes': true,
    'nested-comment': true,
    'noncharacter-character-reference': true,
    'noncharacter-in-input-stream': true,
    'null-character-reference': true,
    'surrogate-character-reference': true,
    'surrogate-in-input-stream': true,
    'unexpected-character-in-attribute-name': true,
    'unexpected-character-in-unquoted-attribute-value': true,
    'unexpected-equals-sign-before-attribute-name': true,
    'unexpected-null-character': true,
    'unexpected-question-mark-instead-of-tag-name': true,
    'unexpected-solidus-in-tag': true,
    'unknown-named-character-reference': true,
    'end-tag-with-attributes': true,
    'duplicate-attribute': true,
    'end-tag-with-trailing-solidus': true,
    'non-void-html-element-start-tag-with-trailing-solidus': false,
    'x-invalid-end-tag': true,
    'x-invalid-namespace': true
  }],
  'vue/block-order': ['error', {
    order: ['template', 'script', 'style']
  }],
  'vue/script-indent': ['error', 2],
  'vue/max-len': [
    'error',
    {
      code: 120,
      ignoreUrls: true,
      tabWidth: 2,
      comments: 120,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
      ignorePattern: '^\\s*const\\s.+=\\s*require\\s*\\(',
      ignoreHTMLTextContents: true,
      ignoreHTMLAttributeValues: true,
      ignoreStrings: true
    }
  ],
  'vue/multi-word-component-names': 'off',
  'vue/valid-v-slot': [
    'error',
    {
      allowModifiers: true
    }
  ],
  'vue/component-name-in-template-casing': ['error', 'kebab-case', {
    registeredComponentsOnly: true,
    ignores: []
  }],
  'vue/html-closing-bracket-newline': 'error',
  'vue/padding-lines-in-component-definition': [
    'error',
    {
      betweenOptions: 'always'
    }
  ],
  'vue/component-tags-order': ['error', {
    order: [['script', 'template'], 'style']
  }]
}

const common = {
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  'func-call-spacing': 'off', // Fix for 'defineEmits'
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 10 }],
  'no-extra-semi': 'off',
  'max-lines': [
    'error',
    {
      max: 1000,
      skipComments: false,
      skipBlankLines: false
    }
  ],
  semi: [2, 'never'],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }
  ],
  'lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: true }
  ],
  'no-unused-vars': 0,
  'max-len': [
    'error',
    {
      code: 100,
      ignoreUrls: true,
      tabWidth: 2,
      ignoreTrailingComments: true,
      ignoreComments: true
    }
  ],
  'no-trailing-spaces': [
    'error',
    {
      skipBlankLines: false
    }
  ],
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1
    }
  ],
  'array-bracket-spacing': ['error', 'never'],
  'object-curly-spacing': ['error', 'always'],
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: {
        multiline: true,
        minProperties: 3,
        consistent: true
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 4
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 4
      }
    }
  ],
  'object-property-newline': [
    'error',
    {
      allowMultiplePropertiesPerLine: true
    }
  ],
  'space-before-blocks': 'error',
  'no-spaced-func': 'error',
  'implicit-arrow-linebreak': 'error',
  'quote-props': ['error', 'as-needed'],
  'computed-property-spacing': ['error', 'never'],
  'comma-spacing': ['error', { before: false, after: true }],
  'brace-style': 'error',
  'key-spacing': [
    'error',
    {
      beforeColon: false
    }
  ],
  'no-empty': [
    'error',
    {
      allowEmptyCatch: true
    }
  ],
  'prefer-object-spread': 'error',
  'space-in-parens': ['error', 'never'],
  'arrow-spacing': [
    'error',
    {
      before: true,
      after: true
    }
  ],
  'dot-notation': 'error',
  indent: ['error', 2],
  'space-unary-ops': 'error',
  'padded-blocks': ['error', 'never'],
  quotes: ['error', 'single'],
  'prefer-rest-params': 'off',
  'comma-dangle': ['error', 'never']
}

const typescript = {
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {
      allowTemplateLiterals: true
    }
  ],
  '@typescript-eslint/no-extra-semi': 'error',
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/ban-types': 'error',
  '@typescript-eslint/comma-dangle': 'error',
  // '@typescript-eslint/ban-ts-comment': [
  //   'error',
  //   {
  //     extendDefaults: true,
  //     types: {
  //       '{}': false
  //     }
  //   }
  // ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_'
    }
  ]
}

module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    tsconfigRootDir: __dirname
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended'
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    ...vue,
    ...common,
    ...typescript
  },
  ignorePatterns: ['dist', 'node_modules', 'build', 'coverage', 'docs', 'test']
}