const { expect } = require('@playwright/test');

exports.ScrollBarPage = class ScrollBarPage {
    constructor(page) {
        this.page = page;
        this.url = page.goto("/scrollbars");
        this.button = page.locator("#hidingButton");
    }

    async navigateToScrollBarPage() {
        await this.url;
    }

    async clickButton() {
        await this.button.click()
    }
}