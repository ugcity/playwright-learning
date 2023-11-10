const { test } = require('@playwright/test')

//import { test } from '@playwright/test';

const { TextInputPage } = require('../models/text-input.model');

test('change text success', async ({ page }) => {
    let text = "testing"
    const t = new TextInputPage(page)
    await t.navigateToPage()
    await t.fillInText(text)
    await t.clickButton()
    await t.expectedButtonTextToBe(text)

  });