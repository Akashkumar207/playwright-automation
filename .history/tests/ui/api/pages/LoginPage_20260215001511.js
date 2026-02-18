export class LoginPage {

  constructor(page) {
    this.page = page;
    this.username = "//input[@id='UserName']";
    this.password = "//input[@id='Password']";
    this.loginBtn = "//button[@id='sign']";
  }

  async gotoLoginPage() {
    await this.page.goto("https://associates.yoma.co.in/");
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

}
