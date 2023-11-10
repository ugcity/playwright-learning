import { test } from "@playwright/test";
const { ProgressBarPage } = require("../models/progress-bar.model");

test("wait until 45%", async ({ page }) => {
  const s = new ProgressBarPage(page);
  await s.navigateToProgressBarPage();
  await s.clickStartButton();
  await s.waitUntilPercentage("45%");
  await s.clickStopButton();
});
