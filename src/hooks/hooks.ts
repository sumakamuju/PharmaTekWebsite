import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';
import { MasterPage } from '../pages/MasterPage/MasterPage';
import { ConfigManager } from '../config/ConfigManager';
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
});

Before({ tags: '@login' }, async function () {

    await this.loginpage.login(
        ConfigManager.ACCOUNT_ID, 
        ConfigManager.EMAIL, 
        ConfigManager.PASSWORD);
    await this.loginpage.clicksignin();

});


/* After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
}); */