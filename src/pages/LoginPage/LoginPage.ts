import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';

export class LoginPage extends BasePage {
    private readonly accountidtextbox: Locator;
    private readonly emailtextbox: Locator;
    private readonly passwordtextbox: Locator;
    private readonly signinbutton: Locator;

    constructor(page: Page) {
        super(page);

        this.accountidtextbox=page.locator("#accountId");
        //this.accountidtextbox = page.getByPlaceholder("Enter Account ID");
        this.emailtextbox = page.getByPlaceholder("Enter email");
        this.passwordtextbox = page.getByPlaceholder("Enter password");
        this.signinbutton = page.getByText(" Sign In").last();
    }
    async enteracctid(accountid: string): Promise<void> {
        await this.page.locator('#accountId').waitFor({ state: 'visible' });
       // await expect(this.accountidtextbox).toBeVisible({ timeout: 90000 });
        await this.fill(this.accountidtextbox, accountid);
    }
    async enteremail(email: string): Promise<void> {
        await this.fill(this.emailtextbox, email);
    }
    async enterpsswd(psswd: string): Promise<void> {
        await this.fill(this.passwordtextbox, psswd);
    }
    async clicksignin(): Promise<void> {
        await this.click(this.signinbutton);
       // await this.page.pause();
    }

    async login(accountid: string, email: string, psswd: string): Promise<void> {
        await this.accountidtextbox.waitFor({ state: 'visible' });
        await this.fill(this.accountidtextbox, accountid);
        await this.fill(this.emailtextbox, email);
        await this.fill(this.passwordtextbox, psswd);
        await this.click(this.signinbutton);
    }


}