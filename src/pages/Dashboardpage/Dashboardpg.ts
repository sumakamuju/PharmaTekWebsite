import { expect, Locator, Page } from '@playwright/test';
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
        this.admindropdown = this.page.getByTitle("Admin Pharmatek");
        this.profilepg = this.page.getByRole('link', { name: 'Profile' });
        this.chngpswd = this.page.getByRole('link', { name: 'Change Password' });
        this.logout = this.page.getByText("Logout").first();
      
    }
    dashboard(): Locator {
        return this.dashboardpg;
    }
    async admindrpdwn(): Promise<void>{
        await this.admindropdown.click();
    }
    async profile(): Promise<void>{
          await expect(this.profilepg).toBeVisible();
        await this.profilepg.click();
    }
   async chng_psswd(): Promise<void> {
                 await expect(this.chngpswd).toBeVisible();
        await this.chngpswd.click();
    }
    async log_out(): Promise<void>{
        
        await this.logout.click();
    }
    
}
