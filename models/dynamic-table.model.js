const { expect } = require("@playwright/test");

exports.DynamicTablePage = class DynamicTablePage {
  constructor(page) {
    this.page = page;
    this.url = page.goto("/dynamictable");
  }

  async navigateToDynamicTablePage() {
    await this.url;
  }

  async grabData() {
    this.spanTags = await this.page
      .locator("span")
      .evaluateAll((elements) => elements.map((el) => el.textContent));
    this.cpuColumnIndex = this.spanTags.indexOf("CPU");
    this.chromeIndex = this.spanTags.indexOf("Chrome");
    this.cpuUsage = this.spanTags[this.chromeIndex + this.cpuColumnIndex - 1];
    const e = await this.page.locator(".bg-warning").textContent();
    this.expectedCPUUsage = e.replace("Chrome CPU: ", "");
  }

  async checkExpectedCPUUsage() {
    await expect(this.expectedCPUUsage).toEqual(this.cpuUsage);
    console.log(`Value 1: ${this.expectedCPUUsage} Value 2: ${this.cpuUsage}`);
  }
};
