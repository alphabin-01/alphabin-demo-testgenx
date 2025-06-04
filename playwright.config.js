// @ts-check
import { defineConfig, devices } from '@playwright/test';


module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 5,
  reporter: [
    ['html', { open: 'never' }]
  ],
  timeout: 50000,
//   expect: {
//     timeout: 100000,
//   },
  use: {
    launchOptions: {
      slowMo: 500,
      args: [
        '--start-maximized',
      ]
    },
    headless: true,
    baseURL: 'http://demo.alphabin.co',
    bypassCSP: true,
    trace: {
      mode: 'on',
      snapshots: true,
      screenshots: true,
      sources: true,
      attachments: true
    },
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chromium'], viewport: null, permissions: ['clipboard-read', 'clipboard-write'] },
    },
  ],
});
