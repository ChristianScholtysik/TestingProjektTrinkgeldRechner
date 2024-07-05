import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


test('Trinkgeldrechner gibt richtiges Trinkgeld aus', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('#summe-input').fill('1000');
  await page.locator('#leute-input').fill('10');
  await page.locator('#qualitaet').selectOption('20');
  await page.locator('#calculate-tip-button').click();
  await expect(page.locator('#result-tip')).toContainText(' 200 EUR');
  await expect(page.locator('#result-perperson')).toContainText(' 120 EUR');
  await expect(page.locator('#result-total')).toContainText(' 1200 EUR');
});