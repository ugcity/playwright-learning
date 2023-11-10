exports.ProgressBarPage = class ProgressBarPage {
  constructor(page) {
    this.page = page;
    this.Url = page.goto("/progressbar");
    this.startButton = page.locator("#startButton");
    this.stopButton = page.locator("#stopButton");
    this.progressBar = page.locator("#progressBar");
  }

  async navigateToProgressBarPage() {
    await this.Url;
  }

  async waitUntilPercentage(percentage) {
    while (this.progress !== percentage) {
      this.progress = await this.progressBar.innerText();
    }
  }

  async clickStartButton() {
    await this.startButton.click();
  }

  async clickStopButton() {
    await this.stopButton.click();
  }
};
