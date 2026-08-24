import { BasePage } from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";

export class InvoicesManagementPage extends BasePage{
    invoicesmanagement: Locator;
    purchaseorder: Locator;
    customerinvoice: Locator;
    vendorbill: Locator;
    expenses: Locator;

    constructor (page: Page){
        super(page);

        this.invoicesmanagement= this.page.getByText("Invoices Management");
        this.purchaseorder= this.page.getByRole('link', {name: 'Purchase Order' });
        this.customerinvoice= this.page.getByRole('link', {name: 'Customer Invoice'});
        this.vendorbill= this.page.getByRole('link', {name: 'Vendor Bill'});
        this.expenses=this.page.getByText("Expenses").first();
    }

    async invoices_management_op(){
        await this.invoicesmanagement.click();
    }
    async purchase_order_im(){
        await this.purchaseorder.click();
    }
    async customer_invoice_im(){
        await this.customerinvoice.click();
    }
    async vendor_bill_im(){
        await this.vendorbill.click();
    }
    async expenses_im(){
        await this.expenses.click();
    }


}