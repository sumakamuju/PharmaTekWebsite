import{Given, When , Then} from '@cucumber/cucumber';
import{expect} from '@playwright/test';
import { ConfigManager } from '../config/ConfigManager';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';
import { TimesheetPage } from '../pages/Timesheets/Timesheetspg';

Given('user clicks on Timesheets', async function () {
  this.loginpage = new LoginPage(this.page);
    this.dashboardpg = new Dashboardpage(this.page);
    this.timesheetspg=new TimesheetPage(this.page);
    await this.timesheetspg.timesheets_ts();
});

Then('user clicks on Roster', async function () {
  console.log("STEP 1 STARTED");
  await this.timesheetspg.roster_ts();
  console.log("ROSTER CLICKED");
});

Then('user redirected to Roster page', async function () {
  const roster_url=this.page.url();
  console.log("CURRENT URL:", roster_url);
  await this.expect(roster_url).toHaveURL("/roster");
});

Then('user clicks on Approvals', async function () {
  console.log("STEP 2 STARTED");
  await this.timesheetspg.approvals_ts();
  console.log("APPROVALS CLICKED");
});

Then('user redirected to Approvals page', async function () {
  const approvals_url=this.page.url();
   console.log("CURRENT URL:", approvals_url);
   await this.expect(approvals_url).toHaveURL("/approvals");

});

