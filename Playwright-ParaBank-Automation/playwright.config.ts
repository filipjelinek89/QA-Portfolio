import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

const proxy =
  process.env.USE_PROXY === 'true'
    ? {
        server: process.env.PROXY_SERVER!,
        username: process.env.PROXY_USERNAME!,
        password: process.env.PROXY_PASSWORD!,
      }
    : undefined;

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  workers: 1,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 1,

  reporter: [
    ['list'],
    ['html']
  ],

  use: {

    baseURL: 'https://parabank.parasoft.com/parabank/',

    headless: false,

    proxy,

    navigationTimeout: 60000,

    actionTimeout: 15000,

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