module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'./.eslintrc-typescript.cjs',
	],
	overrides: [
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'simple-import-sort',
	],
	rules: {
		indent: [ 2, 'tab', ],
		'no-tabs': 0,
		'linebreak-style': [ 2, 'unix', ],
		quotes: [ 2, 'single', ],
		semi: [ 2, 'always', ],
		'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
		'import/prefer-default-export': 'off',
		'import/extensions': [
			2,
			'ignorePackages', {
				js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
			},
		],

		'simple-import-sort/imports': [2, {
			groups: [
				['^react'],
				['^antd'],
				['^@?\\w'],
				['@/(.*)'],
				['^~'],
				['^~/ameliance-ui'],
				['^[./]'],
				['^~assets'],
				['@.+.(sc|sa|c)ss$'],
				['.(sc|sa|c)ss$'],
				['.module.(sc|sa|c)ss$'],
			],
		}],

		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: [
				'state',
			],
		}],

		'max-len': [
			'error',
			{
				code: 100,
				tabWidth: 3,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			}
		],
	},
};
