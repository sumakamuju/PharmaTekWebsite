import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ConfigManager } from '../config/ConfigManager';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';
import { ReportsPage } from '../pages/Reports/ReportsPage';


Given('user clicks on Reports', async function () {
    this.loginpage = new LoginPage(this.page);
    this.dashboardpg = new Dashboardpage(this.page);
    this.reportspg = new ReportsPage(this.page);
    await this.reportspg.reports_op();
});

Then('user clicks on PO Metrics', async function () {
    console.log("STEP 1 STARTED");
    await this.reportspg.po_metrics_reports();
    console.log("PO METRICS CLICKED");
});

Then('user redirected to PO Metrics page', async function () {
    const pometrics_url = this.page.url();
    console.log("CURRENT URL:", pometrics_url);
    await this.expect(pometrics_url).toHaveURL("/po-matrics");
});

Then('user clicks on Invoice Tracking', async function () {
    console.log("STEP 2 STARTED");
    await this.reportspg.invoice_tracking_reports();
    console.log("INVOICE TRACKING CLICKED")
});

Then('user redirected to Invoice Tracking page', async function () {
    const invoicetracking_url = this.page.url();
    console.log("CURRENT URL:", invoicetracking_url);
    await this.expect(invoicetracking_url).toHaveURL("/invoice-tracking");
});

Then('user clicks on Profitability By Project', async function () {
    console.log("STEP 3 STARTED");
    await this.reportspg.profitabilitybyproject_reports();
    console.log("PROFITABILITY BY PROJECT CLICKED");
});

Then('user redirected to Profitability By Project page', async function () {
    const profitabilitybyproject_url = this.page.url();
    console.log("CURRENT URL:", profitabilitybyproject_url);
    await this.expect(profitabilitybyproject_url).toHaveURL("/profitability-by-project")
});

Then('user clicks on Profitability By Resource', async function () {
    console.log("STEP 4 STARTED");
    await this.reportspg.profitabilitybyresource_reports();
    console.log("PROFITABILITY BY RESOURCE CLICKED")

});

Then('user redirected to Profitability By Resource page', async function () {
    const profitabilitybyresource_url = this.page.url();
    console.log("CURRENT URL:", profitabilitybyresource_url);
    await this.expect(profitabilitybyresource_url).toHaveURL("/profitability-by-resources");

});
Then('user clicks on Timesheet Tracking', async function () {
    console.log("STEP 5 STARTED");
    await this.reportspg.timesheettracking_reports();
    console.log("TIMESHEET TRACKING CLICKED");
});

Then('user redirected to Timesheet Tracking page', async function () {
    const timesheettracking_url = this.page.url();
    console.log("CURRENT URL:", timesheettracking_url);
    await this.expect(timesheettracking_url).toHaveURL("/timesheet-tracking");

});

Then('user clicks on Expenses Tracking', async function () {
    console.log("STEP 6 STARTED");
    await this.reportspg.expensestracking_reports();
    console.log("EXPENSES TRACKING CLICKED");
});

Then('user redirected to Expenses Tracking page', async function () {
    const expensestracking_url = this.page.url();
    console.log("CURRENT URL:", expensestracking_url);
    await this.expect(expensestracking_url).toHaveURL("/expenses-tracking");
});

