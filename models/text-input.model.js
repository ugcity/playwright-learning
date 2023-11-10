const { expect } = require('@playwright/test');

exports.TextInputPage = class TextInputPage {
    constructor(page) {
        this.page = page;
        this.url = page.goto('/textinput');
        this.textField = page.getByPlaceholder('MyButton')
        this.button = page.locator("#updatingButton");
    }

    async navigateToPage() {
        await this.url
    }
    
    async fillInText(text){
        await this.textField.fill(text)
    }

    async clickButton(){
        await this.button.click();
    }

    async expectedButtonTextToBe(text) {
        await expect(this.button).toHaveText(text);
    }
}