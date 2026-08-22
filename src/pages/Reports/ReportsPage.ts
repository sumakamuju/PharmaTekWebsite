import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";

export class ReportsPage extends BasePage {

    reports: Locator;
    pometrics: Locator;
    invoicetracking: Locator;
    profitabilitybyproject: Locator;
    profitabilitybyresource: Locator;
    timesheettracking: Locator;
    expensestracking: Locator;


    constructor(page: Page) {
        super(page);
        this.reports = this.page.getByRole('link', { name: 'Reports' });
        this.pometrics = this.page.getByRole('link', { name: 'PO Metrics' });
        this.invoicetracking = this.page.getByRole('link', { name: 'Invoice Tracking' });
        this.profitabilitybyproject = this.page.getByRole('link', { name: 'Profitability By Project' });
        this.profitabilitybyresource= this.page.getByRole('link', {name: 'Profitability By Resource'});
        this.timesheettracking=this.page.getByRole('link', {name: 'Timesheet Tracking'});
        this.expensestracking=this.page.getByRole('link', {name: 'Expenses Tracking'});

    }
    async reports_op() {
        await this.reports.click();
    }
    async po_metrics_reports() {
        await this.pometrics.click();
    }
    async invoice_tracking_reports() {
        await this.invoicetracking.click();
    }
    async profitabilitybyproject_reports() {
        await this.profitabilitybyproject.click();
    }
    async profitabilitybyresource_reports(){
        await this.profitabilitybyresource.click();
    }
    async timesheettracking_reports(){
        await this.timesheettracking.click();
    }
    async expensestracking_reports(){
        await this.expensestracking.click();
    }




}