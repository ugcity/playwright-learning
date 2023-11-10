import { test, expect } from "@playwright/test";

const { HomePage } = require("../models/home-page.model");

test("launch success", async ({ page }) => {
  const s = new HomePage(page);
  await s.navigateToHomePage();
  let allLinks = await s.getAllLinkTags();
  console.log(allLinks.length);
  console.log(allLinks.indexOf("Click"));
  await expect(allLinks.indexOf("Click")).toBe(11)
});
