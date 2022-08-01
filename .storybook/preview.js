import { addParameters } from '@storybook/react';
import { withTableOfContents } from 'storybook-docs-toc';
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

addParameters(withTableOfContents());
