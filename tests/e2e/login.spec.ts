import { expect, test } from '@playwright/test';

test('Login', async ({ page }) => {
	await page.getByText('Login').click();
	await expect(page).toHaveURL('http://localhost:5173/login');
});
