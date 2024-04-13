const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('http://localhost:8080/Cookbook');
    const form = await page.$('h1');
    expect(form).toBeTruthy();
  });
  