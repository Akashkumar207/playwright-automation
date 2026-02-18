export defaul class HomePage {

  constructor(page) {
    this.page = page;
  }

  async addProductToCart(productName) {
    await this.page.locator(`text=${productName}`).click();
    await this.page.locator("text=Add to cart").click();
  }

  async gotoCart() {
    await this.page.locator("#cartur").click();
  }

}
