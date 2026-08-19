import{Given, When, Then} from '@cucumber/cucumber';
import{expect} from '@playwright/test';
import { ConfigManager } from '../config/ConfigManager';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';

let Dashboardpg: Dashboardpage;

Given('user logged in', async function () {
  await this.page.goto(ConfigManager.BASE_URL,{waitUntil: "load", timeout:90000});
  await this.loginpage.login(ConfigManager.ACCOUNT_ID, ConfigManager.EMAIL, ConfigManager.PASSWORD); 
  
});

Then('user should be redirected to dashboard page', async function () {
  this.dashboardpg = new Dashboardpage(this.page);
  await this.page.waitForTimeout(6000);
  const url=this.page.url();
  console.log("current url: " , url)
  await expect(this.page).toHaveURL("http://183.82.98.147/pharmatekdev/dashboard");

});

  Then('user should see the {string} text', async function (text) {
  const isdashboardvisible= await this.dashboardpg.dashboard();
  expect(isdashboardvisible).toBeVisible();
}); 
 
Then('user clicks on admin pharmatek dropdown and options within it', async function () {
  
  await this.dashboardpg.profile();
  await this.dashboardpg.chng_psswd();
  await this.dashboardpg.log_out();
});
