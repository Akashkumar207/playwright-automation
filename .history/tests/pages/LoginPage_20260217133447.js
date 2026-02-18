export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = '#UserName';
        this.password = '#Password';
        this.loginBtn = '#sign';
    }
    async gotoLoginPage() {
        await this.page.goto('https://associates.yoma.co.in/');
    }
    

    async loginBtn(username,password) {
        await this.page.fill(this.username, username);
        
    }

    // Enter Password
    async enterPassword(password) {
        await this.page.fill(this.password, password);
    }

    // Click Login Button
    async clickLogin() {
        await this.page.click(this.loginBtn);
    }

    // Complete Login Action (Reusable Method)
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}
