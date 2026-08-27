import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import path from 'path';

export class NewResourceReqPg extends BasePage {
    addresourcereq: Locator;
    firstname: Locator;
    middlename: Locator;
    lastname: Locator;
    email: Locator;
    mobilecode: Locator;
    mobilenumber: Locator;
    save: Locator;
    cancel: Locator;
    closebtn: Locator;
    closeconfirmationmsg: Locator;
    closeoption: Locator;
    yescancelitoption: Locator;
    downloadbtn: Locator;
    excelformat: Locator;
    pdfformat: Locator;
    searchop: Locator;
    searchres: Locator;
    newresrcreqformtitle: Locator;

    constructor(page: Page) {
        super(page);

        this.addresourcereq = this.page.getByRole('button', { name: ' Add Resource Request' });
        this.newresrcreqformtitle=this.page.locator(".modal-title",{hasText:"New Resource Request"});
        this.firstname = this.page.locator("input[name='firstName']");
        this.middlename = this.page.locator("input[name='middleName']");
        this.lastname = this.page.locator("input[name='lastName']");
        this.email = this.page.locator("input[name='email']");
        this.mobilecode = this.page.locator("select[name='mobileStdCode']");
        this.mobilenumber = this.page.locator("input[name='mobile']");
        this.save = this.page.getByRole('button', { name: 'Save' });
        this.cancel = this.page.getByRole('button', { name: 'Cancel' });
        this.closebtn = this.page.locator(".modal-dialog").getByRole('button', { name: 'close' });
        this.closeconfirmationmsg=this.page.getByText("Are you sure?");
        this.closeoption = this.page.getByText("Close").nth(4);
        this.yescancelitoption = this.page.getByText("Yes, Cancel It!");
        this.downloadbtn = this.page.getByRole('button', { name: ' Download' });
        this.excelformat = this.page.getByRole('button', { name: ' Excel (.xlsx)' });
        this.pdfformat = this.page.getByRole('button', { name: 'PDF (.pdf)' });
        this.searchop = this.page.getByPlaceholder("Search by name or email...");
        this.searchres= this.page.locator("tr[role='row']").nth(1);
    }

    async add_resc_req(): Promise<void> {
        await this.addresourcereq.click();
    }
    async first_name(value: string): Promise<void> {
        await this.firstname.fill(value);
    }
    async middle_name(value: string): Promise<void> {
        await this.middlename.fill(value);
    }
    async last_name(value: string): Promise<void> {
        await this.lastname.fill(value);
    }
    async email_field(value: string): Promise<void> {
        await this.email.fill(value);
    }
    async mobile_code_field(value: string): Promise<void> {
        await this.mobilecode.selectOption(value);
    }
    async mobile_number_field(value: string): Promise<void>{
        await this.mobilenumber.fill(value);
    }
    async save_data(): Promise<void> {
        await this.save.click();
    }
    async cancel_data(): Promise<void> {
        await this.cancel.click();
    }
    async close_window(): Promise<void> {
        await this.closebtn.click();
    }
    async close_option(): Promise<void> {
        await this.closeoption.click();
    }
    async cancel_option(): Promise<void> {
        await this.yescancelitoption.click();
    }
    async download_pdf(): Promise<string> {
        const downloadPromise = this.page.waitForEvent('download');
        await this.downloadbtn.click();
        await this.pdfformat.click();
        const download = await downloadPromise;
        const filePath = path.join(process.cwd(), 'downloads', 'Resource_Request_List.pdf');
        await download.saveAs(filePath);
        return filePath;  
    }
    async download_excel(): Promise<string>{
        const downloadPromise = this.page.waitForEvent('download');
        await this.downloadbtn.click();
        await this.excelformat.click();
        const download = await downloadPromise;
        const filePath = path.join(process.cwd(), 'downloads', 'Resource_Request_List.xlsx');
        await download.saveAs(filePath);
        return filePath;
        
    }
    async search_field(value: string): Promise<void> {
        await this.searchop.fill(value);
    }



}