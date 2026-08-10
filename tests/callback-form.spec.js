// @ts-check
import { test, expect } from '@playwright/test';
import { CallbackPage } from '../pages/callback.page.js';
import { getTimestamp } from '../utils/screenshot.js';

test('page loads correctly', async ({ page }) => {
  const callbackPage = new CallbackPage(page);

  await callbackPage.goto();

  await expect(callbackPage.heroHeading).toBeVisible();
  await expect(page).toHaveTitle('Landing Page');
});

test('submit callback form successfully', async ({ page }) => {
  const callbackPage = new CallbackPage(page);

  await callbackPage.goto();

  await callbackPage.fillForm({
    name: 'Mohamed Omari',
    email: 'mohamed@example.com',
    phone: '0501234567',
    company: 'Jones Test',
    website: 'https://example.com'
  });

  await callbackPage.selectEmployees('51-500');

  const timestamp = getTimestamp();

  await page.screenshot({
    path: `screenshots/callback-form-before-submit-${timestamp}.png`,
    fullPage: true
  });

  await callbackPage.submit();

  await expect(callbackPage.thankYouHeading).toBeVisible();
  await expect(page).toHaveURL(/thank-you\.html/);

  console.log('Successfully reached the Thank You page');
});