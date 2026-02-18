export class DashboardPage {

    constructor(page) {
        this.page = page;
        this.dasboard
        this.products = ".hrefch";

        // this.addtocartbutton = "//a[normalize-space()='Add to cart']";
        // this.cartpage = "#cartur";

    }

    async addProductToCart(productname) {
        const productlist = await this.page.$$(this.products)

        for (const product of productlist) {
            if (productname === await product.textContent()) {
                await product.click();
                break;
            }
        }

        this.page.once('dialog', async dialog => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        })

        await this.page.locator(this.addtocartbutton).click();
    }

    async gotoCart() {
        await this.page.locator(this.cartpage).click();  
    }
}
