import {Before, After, setDefaultTimeout} from '@cucumber/cucumber';
import {Browser, BrowserContext, chromium, Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';
setDefaultTimeout(90000);

Before(async function(){
    this.browser= await chromium.launch({headless: false, args: ['--start-maximized'],});
    this.context= await this.browser.newContext({viewport: null,});
    this.page=await this.context.newPage();
    this.loginpage = new LoginPage(this.page);
    this.dashboardpg= new Dashboardpage(this.page);
    this.page.setDefaultTimeout(90000);
    this.page.setDefaultNavigationTimeout(90000);
});

After(async function(){
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});