import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText("Tune In: Exploring Infinite Stories through Soundscapes")).toBeTruthy()
});
