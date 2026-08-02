import { test as base, expect } from '@playwright/test';

export const test = base.extend({

    page: async ({ page }, use) => {

        console.log('⏳ Waiting 3 seconds before test...');

        await page.context().clearCookies();

        await page.waitForTimeout(3000);

        await use(page);

    }

});

export { expect };