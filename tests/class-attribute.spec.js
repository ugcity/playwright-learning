import { test } from '@playwright/test';
const { ClassAttributePage } = require('../models/class-attribute.model');

test('clicking blue button', async ({ page }) => {
  //await page.pause();
  page.on('dialog', async dialog => {
    s.getDialogMessage(dialog.message());
    await dialog.dismiss()
  })
  const s = new ClassAttributePage(page);
  await s.navigateToClassAttributePage();
  await s.clickBlueButton();
  await s.expectDialogMessageToBe("Primary button pressed");

});