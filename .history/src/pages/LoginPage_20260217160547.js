import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.username = "#username";
        this.password = "#password";
        this.loginBtn = "#loginBtn";
    }

    async gotoLoginPage() {
        await this.page.goto("https://your-url.com/login");
    }

    async login(user, pass) {
        await this.fill(this.username, user);
        await this.fill(this.password, pass);
        await this.click(this.loginBtn);
    }
}
