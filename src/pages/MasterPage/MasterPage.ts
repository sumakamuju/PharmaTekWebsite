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
        this.master = this.page.getByText("Master").first();
        this.newrsrsreq = this.page.getByRole('link', { name: 'New Resource Request', exact:true });
        this.resources = this.page.getByText("Resources");
        this.customers= this.page.getByRole('link', {name: 'Customers'});
        this.vendors= this.page.getByRole('link',{name: 'Vendors'});
    } 
    async master_op() {
         await this.master.waitFor({state: "visible"});
        await this.master.click();
    }
    async new_resrc_req() {
         await this.newrsrsreq.waitFor({state: "visible"});
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