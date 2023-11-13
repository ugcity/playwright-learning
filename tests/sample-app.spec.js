import { test } from "@playwright/test";

const { SampleAppPage } = require("../models/sample-app.model");
let username = process.env.USERNAME;
let password = process.env.PASSWORD;

test.describe.parallel("suite", () => {
  test("log in success", async ({ page }) => {
    const s = new SampleAppPage(page);
    await s.navigateToSampleApp();
    await s.fillUsernameField(username);
    await s.fillPasswordField(password);
    await s.clickLoginButton();
    await s.expectedLoginTextToBe(`Welcome, ${username}!`);
  });

  test("wrong password", async ({ page }) => {
    const s = new SampleAppPage(page);
    await s.navigateToSampleApp();
    await s.fillUsernameField(username);
    await s.fillPasswordField("wrong");
    await s.clickLoginButton();
    await s.expectedLoginTextToBe(`Invalid username/password`);
  });

  test("no username", async ({ page }) => {
    username = "";
    const s = new SampleAppPage(page);
    await s.navigateToSampleApp();
    await s.fillUsernameField(username);
    await s.fillPasswordField("wrong");
    await s.clickLoginButton();
    await s.expectedLoginTextToBe(`Invalid username/password`);
  });

  test("log out", async ({ page }) => {
    const s = new SampleAppPage(page);
    await s.navigateToSampleApp();
    await s.fillUsernameField(username);
    await s.fillPasswordField(password);
    await s.clickLoginButton();
    await s.expectedLoginTextToBe(`Welcome, ${username}!`);
    await s.clickLogoutButton();
    await s.expectedLoginTextToBe(`User logged out.`);
  });
});
