export class DashboardPage {

    constructor(page) {
        this.page = page;
        this.dashboard="//a[@class='text-muted']"

        // this.profile="//p[@class='font-weight-light mb-0 font-12']"


        // this.addtocartbutton = "//a[normalize-space()='Add to cart']";
        // this.cartpage = "#cartur";

    }

    async verifydashboardPage(productname) {
       

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
