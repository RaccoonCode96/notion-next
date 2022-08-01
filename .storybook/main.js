module.exports = {
	stories: [
		'../Components/**/*.stories.mdx',
		'../Components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		// reactDocgenTypescriptOptions: {
		// 	compilerOptions: {
		// 		allowSyntheticDefaultImports: false,
		// 		esModuleInterop: false,
		// 	},
		// },
	},
};
