import { BasePage } from './BasePage';

export class ProfilePage extends BasePage {

    constructor(page) {
        super(page);

        this.profileName = "#profileName";
        this.editBtn = "#editProfile";
    }

    async verifyProfileVisible() {
        await this.page.locator(this.profileName).waitFor({ state: "visible" });
    }

    async clickEditProfile() {
        await this.click(this.editBtn);
    }
}
