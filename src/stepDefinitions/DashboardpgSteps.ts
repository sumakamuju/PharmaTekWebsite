import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ConfigManager } from '../config/ConfigManager';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';

let Dashboardpg: Dashboardpage;


Then('user should be redirected to dashboard page', async function () {
  const url = this.page.url();
  console.log("current url: ", url)
  await expect(this.page).toHaveURL("http://183.82.98.147/pharmatekdev/dashboard", { timeout: 30000 });

});

Then('user should see the {string} text', async function (text) {
  //const isdashboardvisible = await this.dashboardpg.dashboard();
  await expect(this.page.getByText(text, { exact: true })).toBeVisible();
});

Then('user clicks on admin pharmatek dropdown', async function () {
  await this.dashboardpg.admindrpdwn();
  console.log("Clicked on Admin drop down ")
});

Then('user clicks on profile option', async function () {

  await this.dashboardpg.profile();
  console.log("Clicked on profile");
});

Then('user clicks on change password option', async function () {
  await this.dashboardpg.chng_psswd();
  console.log("Clicked on change password")

});

Then('user clicks on log out option', async function () {
  await this.dashboardpg.log_out();
  console.log("Clicked on log out")
});

