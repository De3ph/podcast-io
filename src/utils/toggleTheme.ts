import { colorScheme } from '@svelteuidev/core';

function toggleTheme() {
	colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
}

export default toggleTheme;
