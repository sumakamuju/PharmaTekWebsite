import{setWorldConstructor, World, IWorldOptions} from '@cucumber/cucumber';
import {Browser, BrowserContext, Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';
export class CustomWorld extends World{
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    loginpage!: LoginPage;
    dashboardpg!: Dashboardpage;

    constructor(options: IWorldOptions){
        super(options);
    }
}
setWorldConstructor(CustomWorld);