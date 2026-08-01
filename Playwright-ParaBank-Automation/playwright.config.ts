import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,
  workers: 1,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['list'],
    ['html']
  ],

  use: {
    baseURL: 'https://parabank.parasoft.com/parabank/',

    headless: false,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],
});