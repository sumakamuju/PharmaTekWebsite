import { Given, When, Then } from "@cucumber/cucumber";
import { ConfigManager } from "../config/ConfigManager";
import{ expect } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { Dashboardpage } from "../pages/Dashboardpage/Dashboardpg";
import { MasterPage } from "../pages/MasterPage/MasterPage";
import { TIMEOUT } from "node:dns";

let masterpage: MasterPage;

Given ('user clicks on master', async function(){
    this.loginpage = new LoginPage(this.page);
    this.dashboardpg= new Dashboardpage(this.page);
    this.masterpage= new MasterPage(this.page);
    await this.page.goto(ConfigManager.BASE_URL,{witUntil: 'load', TIMEOUT:90000});
    await this.loginpage.login(ConfigManager.ACCOUNT_ID,ConfigManager.EMAIL,ConfigManager.PASSWORD);
    await this.masterpage.master_op();
    
})
Then(' user clicks on new resource request',async function () {
  console.log("STEP 1 STARTED");
  await this.masterpage.new_resrc_req();
  console.log("CLICKED ON NEW RESOURCE REQUEST");
});

Then('user redirected to new resource request page', async function () {
   const URL=this.page.url();
  console.log("CURRENT URL: ", URL)
  await expect(URL).toHaveURL("/resource-request");
});

Then('user clicks on resources', async function () {
  console.log("STEP 2 STARTED");
  await this.masterpage.resources_master();
  console.log("CLICKED ON RESOURCES");
  
});

Then('user redirected to resources page', async function () {
  const URL1=this.page.url();
  console.log("CURRENT URL", URL);
  await expect(URL1).toHaveURL("/resource");
});

Then('user clicks on customers', async function () {
  console.log("STEP 3 STARTED");
  await this.masterpage.customers_master();
  console.log("CLICKED ON CUSTOMERS");
});

Then('user redirected to customers page', async function () {
  const URL2=this.page.url();
  console.log("CURRENT URL",URL2);
  await expect(URL2).toHaveURL("/customer");
});

Then('user clicks on vendors', async function () {
  console.log("STEP 4 STARTED");
  await this.masterpage.vendors_master();
  console.log("CLICKED ON VENDORS");
});

Then('user redirected to vendors page', async function () {
  const URL3=this.page.url();
  console.log("CURRENT URL", URL3);
  await expect(URL3).toHaveURL("/vendor");
});


