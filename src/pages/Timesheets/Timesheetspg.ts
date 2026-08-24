import { BasePage } from "../BasePage/BasePage";
import { Locator, Page } from '@playwright/test';

export class TimesheetPage extends BasePage {
    timesheets: Locator;
    roster: Locator;
    approvals: Locator;
    constructor(page: Page) {
        super(page);
        this.timesheets = this.page.getByRole('link', { name: 'Timesheets' });
        this.roster = this.page.getByRole('link', { name: 'Roster' });
        this.approvals = this.page.getByRole('link', { name: 'Approvals' });
    }

    async timesheets_ts() {
        await this.timesheets.click();
    }
    async roster_ts() {
        await this.roster.click();
    }
    async approvals_ts() {
        await this.approvals.click();
    }

}