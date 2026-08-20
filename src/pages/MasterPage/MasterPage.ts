import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";

export class MasterPage extends BasePage {
    master: Locator;
    newrsrsreq: Locator;
    resources: Locator;
    customers: Locator;
    vendors: Locator;
    constructor(page: Page) {
        super(page);
        this.master = this.page.getByRole('link', { name: 'Master' });
        this.newrsrsreq = this.page.getByRole('link', { name: 'New Resource Request' });
        this.resources = this.page.getByText("Resources").nth(2);
        this.customers= this.page.getByRole('link', {name: 'Customers'});
        this.vendors= this.page.getByRole('link',{name: 'Vendors'});
    } 
    async master_op() {
        await this.master.click();
    }
    async new_resrc_req() {
        await this.newrsrsreq.click();
    }
    async resources_master(){
        await this.resources.click();
    }
    async customers_master(){
        await this.customers.click();
    }
    async vendors_master(){
        await this.vendors.click();
    }






}