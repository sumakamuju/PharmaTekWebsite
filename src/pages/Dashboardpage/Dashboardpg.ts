import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';

export class Dashboardpage extends BasePage {
    readonly dashboardpg: Locator;
    readonly admindropdown: Locator;
    readonly profilepg: Locator;
    readonly chngpswd: Locator;
    readonly logout: Locator;

    constructor(page: Page) {
        super(page);
        this.dashboardpg = this.page.getByRole('heading', { name: 'DASHBOARD' });
        this.admindropdown = page.getByTitle("Admin Pharmatek");
        this.profilepg = page.getByText("Profile").nth(1);
        this.chngpswd = page.getByText("chngpswd");
        this.logout = page.getByText("Logout").first();

    }
    dashboard(): Locator {
        return this.dashboardpg;
    }

    async profile() {
   
        await this.admindropdown.click();
         await this.profilepg.waitFor({state: 'visible'})
        await this.profilepg.click();
    }

    async chng_psswd() {
        await this.admindropdown.click();
        await this.chngpswd.click();
    }
 
    async log_out(){
        await this.admindropdown.click();
        await this.logout.click();
    }
}
