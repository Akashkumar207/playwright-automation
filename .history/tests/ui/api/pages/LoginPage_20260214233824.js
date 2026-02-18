export default class LoginPage {

  constructor(page) {
    this.page = page;
    this.username = "";
    this.password = "#Password";
    this.loginBtn = "#sign";
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

}
