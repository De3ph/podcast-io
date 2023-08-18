import { render, screen } from '@testing-library/svelte';

import Component from './AuthButton.svelte';
import { expect, test } from 'vitest';

test('render properly', () => {
	render(Component, { props: { type: 'Login'} });
    const text = screen.getByText("Login")
    expect(text).toBeTruthy()
});
