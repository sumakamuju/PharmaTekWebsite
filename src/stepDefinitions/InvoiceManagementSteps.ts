import { Given, When, Then } from "@cucumber/cucumber";
import { ConfigManager } from "../config/ConfigManager";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { Dashboardpage } from "../pages/Dashboardpage/Dashboardpg";
import { InvoicesManagementPage } from "../pages/InvoicesManagement/InvoicesManagementpg";

Given('user clicks on Invoices management', async function () {
   this.loginpage = new LoginPage(this.page);
    this.dashboardpg= new Dashboardpage(this.page);
    this.invoicesmanagementpg= new InvoicesManagementPage(this.page);
    await this.invoicesmanagementpg.invoices_management_op();
});

Then('user clicks on purchase order', async function () {
  console.log("STEP 1 STARTED");
  await this.invoicesmanagementpg.purchase_order_im();
  console.log("PURCHASE ORDER CLICKED")
});

Then('user redirected to purchase order page', async function () {
  console.log("REDIRECTED TO PURCHASE ORDER");
  const purcehaseorder_url=this.page.url();
  console.log("CURRENT URL: ", purcehaseorder_url)
  await expect(purcehaseorder_url).toContain("/pharmatekdev/purchase-order");
});

Then('user clicks on Customer Invoice', async function () {
  console.log("STEP 2 STARTED");
  await this.invoicesmanagementpg.customer_invoice_im();
  console.log("CUSTOMER INVOICE CLICKED");
});

Then('user redirected to Customer Invoice page', async function () {
 const customerinvoice_url= this.page.url();
 console.log("CURRENT URL:", customerinvoice_url)
 expect(customerinvoice_url).toContain("/pharmatekdev/customer-invoice")
 });

Then('user clicks on vendor bill', async function () {
  console.log("STEP 3 STARTED");
  await this.invoicesmanagementpg.vendor_bill_im();
  console.log("VENDOR BILL CLICKED")
});

Then('user redirected to vendor bill page', async function () {
  const vendorbill_url=this.page.url();
  console.log("CURRENT URL:",vendorbill_url );
  await expect(vendorbill_url).toContain("/pharmatekdev/vendor-bill");

});

Then('user clicks on expenses', async function () {
  console.log("STEP 4 STARTED");
  await this.invoicesmanagementpg.expenses_im();
  console.log("EXPENSES CLICKED");
});

Then('user redirected to expenses page', async function () {
  const expenses_url=this.page.url();
  console.log("CURRENT URL:", expenses_url);
  expect(expenses_url).toContain("/pharmatekdev/expenses");
});

