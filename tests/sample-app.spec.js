import { test } from "@playwright/test";

const { SampleAppPage } = require("../models/sample-app.model");

test.describe.parallel("suite", () => {
  test("log in success", async ({ page }) => {
    let username = "hahaha";
    const s = new SampleAppPage(page);
    await s.navigateToSampleApp();
    await s.fillUsernameField(username);
    await s.fillPasswordField("pwd");
    await s.clickLoginButton();
    await s.expectedLoginTextToBe(`Welcome, ${username}!`);
  });

  test("wrong password", async ({ page }) => {
    let username = "hahaha";
    const s = new SampleAppPage(page);
    await s.navigateToSampleApp();
    await s.fillUsernameField(username);
    await s.fillPasswordField("wrong");
    await s.clickLoginButton();
    await s.expectedLoginTextToBe(`Invalid username/password`);
  });

  test("no username", async ({ page }) => {
    let username = "";
    const s = new SampleAppPage(page);
    await s.navigateToSampleApp();
    await s.fillUsernameField(username);
    await s.fillPasswordField("wrong");
    await s.clickLoginButton();
    await s.expectedLoginTextToBe(`Invalid username/password`);
  });

  test("log out", async ({ page }) => {
    let username = "hahaha";
    const s = new SampleAppPage(page);
    await s.navigateToSampleApp();
    await s.fillUsernameField(username);
    await s.fillPasswordField("pwd");
    await s.clickLoginButton();
    await s.expectedLoginTextToBe(`Welcome, ${username}!`);
    await s.clickLogoutButton();
    await s.expectedLoginTextToBe(`User logged out.`);
  });
});
