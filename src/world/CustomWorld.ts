import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';
import { MasterPage } from '../pages/MasterPage/MasterPage';
import { NewResourceReqPg } from '../pages/MasterPage/NewResourceRequestpg';
import { InvoicesManagementPage } from '../pages/InvoicesManagement/InvoicesManagementpg';
import{TimesheetPage} from '../pages/Timesheets/Timesheetspg';
import { ReportsPage } from '../pages/Reports/ReportsPage';
import { SecurityPage } from '../pages/Security/securitypg';

export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    loginpage!: LoginPage;
    dashboardpg!: Dashboardpage;
    masterpage!: MasterPage;
    invoicesmanagementpg!: InvoicesManagementPage;
    timesheetspg!: TimesheetPage;
    reportspg!: ReportsPage;
    securitypg!: SecurityPage;
    newresrcreqpg!: NewResourceReqPg;

    constructor(options: IWorldOptions) {
        super(options);
    }
}
setWorldConstructor(CustomWorld);