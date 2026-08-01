import { test as base, expect } from '@playwright/test';

export const test = base;

test.beforeEach(async ({ page }) => {

    console.log('Waiting 3 seconds before test...');

    await page.waitForTimeout(3000);

});

export { expect };