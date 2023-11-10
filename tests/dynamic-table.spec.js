import { test } from "@playwright/test";

const { DynamicTablePage } = require("../models/dynamic-table.model");

test("check Chrome CPU", async ({ page }) => {
  const s = new DynamicTablePage(page);
  await s.navigateToDynamicTablePage();
  await s.grabData();
  await s.checkExpectedCPUUsage()
});
