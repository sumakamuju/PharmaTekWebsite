import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';
import { MasterPage } from '../pages/MasterPage/MasterPage';
import { ConfigManager } from '../config/ConfigManager';
import { InvoicesManagementPage } from '../pages/InvoicesManagement/InvoicesManagementpg';
import { TimesheetPage } from '../pages/Timesheets/Timesheetspg';
import { ReportsPage } from '../pages/Reports/ReportsPage';
import {SecurityPage} from '../pages/Security/securitypg';
setDefaultTimeout(120000);

Before(async function () {
    this.browser = await chromium.launch({ headless: false, args: ['--start-maximized'], });
    this.context = await this.browser.newContext({ viewport: null, });
    this.page = await this.context.newPage();

    this.page.setDefaultTimeout(30000); 
    this.page.setDefaultNavigationTimeout(60000);

    this.loginpage = new LoginPage(this.page);
    this.dashboardpg = new Dashboardpage(this.page);
    this.masterpage = new MasterPage(this.page);
    this.invoicesmanagementpg= new InvoicesManagementPage(this.page);
    this.timesheetspg=new TimesheetPage(this.page);
    this.reportspg=new ReportsPage(this.page);
    this.securitypg=new SecurityPage(this.page);
    

});

Before({ tags: '@login' }, async function () {
    await this.page.goto(ConfigManager.BASE_URL,{waitUntil: "load", timeout:90000});
    await this.loginpage.enteracctid(ConfigManager.ACCOUNT_ID);
    await this.loginpage.enteremail(ConfigManager.EMAIL);
    await this.loginpage.enterpsswd(ConfigManager.PASSWORD);
    await this.loginpage.clicksignin();

});


After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
}); 