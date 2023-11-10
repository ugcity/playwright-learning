import { test } from '@playwright/test';
const { ScrollBarPage } = require('../models/scroll-bar.model');

test('clicking hidden button', async ({ page }) => {
  const s = new ScrollBarPage(page);
  await s.navigateToScrollBarPage();
  await s.clickButton()
});