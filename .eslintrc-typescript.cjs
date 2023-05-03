// custom typescript eslint rules by AmelianceSkyMusic@gmail.com
module.exports = {
	rules: {
		// TypeScript Rules
		'@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
		'@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
		'@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
		'@typescript-eslint/member-ordering': [ // TODO: testing
			'error', { default: ['signature', 'method', 'constructor', 'field'] },
		],
		'@typescript-eslint/method-signature-style': 'warn',
		'@typescript-eslint/naming-convention': ['warn',
			{ selector: 'interface', format: ['PascalCase'] },
			{ selector: 'enum', format: ['PascalCase'] },
			{ selector: 'typeLike', format: ['PascalCase'] },
		],
		'@typescript-eslint/no-confusing-non-null-assertion': 'warn', // TODO: testing
		'@typescript-eslint/no-duplicate-enum-values': 'warn',
		'@typescript-eslint/unified-signatures': 'warn',

		// Extension Rules
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'error', // TODO: good but don't work
		'no-loss-of-precision': 'off',
		'@typescript-eslint/no-loss-of-precision': 'warn', // TODO: testing
		//'no-magic-numbers': 'off',
		// '@typescript-eslint/no-magic-numbers': [1, { "ignoreTypeIndexes": true }], // TODO: good but don't ignore
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': [2],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'warn',
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'warn',

		// Formatting Rules
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': 'warn',
		'indent': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': 'warn',
		'@typescript-eslint/member-delimiter-style': 'warn',
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['warn', 'always'],
		'quotes': 'off',
		'@typescript-eslint/quotes': ['warn', 'single'],
		'semi': 'off',
		'@typescript-eslint/semi': 'warn',
		'space-before-blocks': 'off',
		'@typescript-eslint/space-before-blocks': 'warn',
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': ['warn', {
			'anonymous': 'always',
			'named': 'never',
			'asyncArrow': 'always'
	  }],
	  'space-infix-ops': 'off',
	  '@typescript-eslint/space-infix-ops': 'warn',
	  '@typescript-eslint/type-annotation-spacing': 'warn',
	}
};
