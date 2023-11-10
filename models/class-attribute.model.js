const { expect } = require('@playwright/test');

exports.ClassAttributePage = class ClassAttributePage {
    constructor(page) {
        this.page = page;
        this.url = page.goto("/classattr");
        this.blueButton = page.locator(".btn-primary")
    }

    async navigateToClassAttributePage() {
        await this.url;
    }

    async clickBlueButton(){
        await this.blueButton.click()
    }

    async expectDialogMessageToBe(text)
    {
        expect(this.dialogText).toEqual(text);
    }

    async getDialogMessage(text)
    {
        this.dialogText = text
    }
}