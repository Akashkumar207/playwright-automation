export class LoginPage {

    constructor(page) {

        this.page = page;
        this.usernameInput = "#UserName";
        this.passwordInput = "#Password";
        this.signButton ="//button[@id='sign']"

    }

    async gotoLoginPage() {
        await this.page.goto("https://associates.yoma.co.in/");
    }

    async login(username, password) {
        // await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.signButton).click();
    }

}
