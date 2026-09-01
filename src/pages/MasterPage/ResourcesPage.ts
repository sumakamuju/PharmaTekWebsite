import { validateConfiguration } from "@cucumber/cucumber/lib/configuration/validate_configuration";
import { BasePage } from "../BasePage/BasePage";
import { Page, Locator } from '@playwright/test';
import path from 'path';
export class ResourcesPage extends BasePage {
    addresource: Locator;
    addnewresource: Locator;
    closeop: Locator;
    confrmsg: Locator;
    closebtn: Locator;
    cancelbtn: Locator;
    firstname: Locator;
    middlename: Locator;
    lastname: Locator;
    mailid: Locator;
    altmailid: Locator;
    mobilecode: Locator;
    mobilenumber: Locator;
    phonenumbercode: Locator;
    phonenumber: Locator;
    manager: Locator;
    department: Locator;
    role: Locator;
    pg1saveasdraft: Locator;
    pg1next: Locator;
    pg1close: Locator;
    salaryengagement: Locator;
    engagementype: Locator;
    selectresourcetype: Locator;
    annualsalary: Locator;
    pg2close: Locator;
    pg2back: Locator;
    pg2next: Locator;
    pg2saveasdraft: Locator;
    address: Locator;
    strtaddress: Locator;
    cityname: Locator;
    zipcode: Locator;
    selctcountry: Locator;
    // countryname: Locator;
    pg3close: Locator;
    pg3back: Locator;
    pg3saveasdraft: Locator;
    pg3next: Locator;
    bankdetails: Locator;
    bankname: Locator;
    accountname: Locator;
    accountnumber: Locator;
    routingnumber: Locator;
    swiftnumber: Locator;
    pg4close: Locator;
    pg4back: Locator;
    pg4saveasdraft: Locator;
    pg4addresourcee: Locator;
    refreshbtn: Locator;
    resourcedownload: Locator;
    exceldownload: Locator;
    pdfdownload: Locator;
    statusviewbtn: Locator;
    activeview: Locator;
    inactiveview: Locator;
    searchtext: Locator;
    actionview: Locator;
    actionedit: Locator;
    actionprojectmapping: Locator;
    actioninactive: Locator;
    actionsync: Locator;
    actionlock: Locator;
    //readonly mandatoryFields: Record<string,{field: Locator; error: Locator; message: string}>;

    constructor(page: Page) {
        super(page);

        this.addresource = this.page.getByRole('button', { name: ' Add Resource' });
        this.addnewresource = this.page.getByText("Add New Resource"); //addnewresource title assertion
        this.closeop = this.page.locator(".btn-close").last();
        this.confrmsg = this.page.getByText("Are you sure?");
        this.closebtn = this.page.getByText("Close").last();
        this.cancelbtn = this.page.getByText("Yes, Cancel It!");
        this.firstname = this.page.getByPlaceholder("Enter First Name");
        this.middlename = this.page.getByPlaceholder("Enter Middle Name");
        this.lastname = this.page.getByPlaceholder("Enter Last Name");
        this.mailid = this.page.getByPlaceholder("Enter Email Id");
        this.altmailid = this.page.getByPlaceholder("Enter Alternate Email");
        this.mobilecode = this.page.locator("select[name='mobileStdCode']");
        this.mobilenumber = this.page.locator("input[name='mobile']");
        this.phonenumbercode = this.page.locator("select[class='form-select']").nth(2);
        this.phonenumber = this.page.locator("div[class='input-group']").nth(1);
        this.manager = this.page.getByText("Select manager");
        this.department = this.page.getByText("Select Department");
        this.role = this.page.getByText("Select...");
        this.pg1saveasdraft = this.page.getByRole('button', { name: "Save as Draft" });
        this.pg1next = this.page.getByRole('button', { name: 'Next' });
        this.pg1close = this.page.getByRole('button', { name: 'Close' }).last();
        this.salaryengagement = this.page.getByText("Salary & Engagement");
        this.engagementype = this.page.getByText("Select Engagement Type");
        this.selectresourcetype = this.page.getByText("Select Resource Type");
        this.annualsalary = this.page.getByPlaceholder("Enter Annual Salary");
        this.pg2close = this.page.getByRole('button', { name: 'Close' }).last();
        this.pg2back = this.page.getByRole('button', { name: 'Back' });
        this.pg2saveasdraft = this.page.getByRole('button', { name: 'Save as Draft' })
        this.pg2next = this.page.getByRole('button', { name: 'Next' });
        this.address = this.page.getByText("Address").nth(0);
        this.strtaddress = this.page.getByPlaceholder("Enter Street Address");
        this.cityname = this.page.getByPlaceholder("Enter City Name");
        this.zipcode = this.page.getByPlaceholder("Enter Zip Code");
        this.selctcountry = this.page.getByText("Select Country");
        // this.countryname=this.

        this.pg3close = this.page.getByRole('button', { name: 'Close' }).last();
        this.pg3back = this.page.getByRole('button', { name: 'Back' });
        this.pg3saveasdraft = this.page.getByRole('button', { name: 'Save as Draft' })
        this.pg3next = this.page.getByRole('button', { name: 'Next' });
        this.bankdetails = this.page.getByText("Bank Details");
        this.bankname = this.page.getByPlaceholder("Enter Bank Name");
        this.accountname = this.page.getByPlaceholder("Enter Account Holder Name");
        this.accountnumber = this.page.getByPlaceholder("Enter Account Number");
        this.routingnumber = this.page.getByPlaceholder("Enter Routing Number");
        this.swiftnumber = this.page.getByPlaceholder("Enter SWIFT Code (e.g., CHASUS33)");
        this.pg4close = this.page.getByRole('button', { name: 'Close' }).last();
        this.pg4back = this.page.getByRole('button', { name: 'Back' });
        this.pg4saveasdraft = this.page.getByRole('button', { name: 'Save as Draft' })
        this.pg4addresourcee = this.page.getByRole('button', { name: 'Add Resourcee' });
        this.refreshbtn = this.page.getByRole('button', { name: 'Refresh' })
        this.resourcedownload = this.page.getByRole('button', { name: ' Download' });
        this.exceldownload = this.page.getByRole('button', { name: 'Excel (.xlsx)' });
        this.pdfdownload = this.page.getByRole('button', { name: ' PDF (.pdf)' });
        this.statusviewbtn = this.page.getByRole('button', { name: 'Active' }).nth(4);
        this.activeview = this.page.getByRole('button', { name: 'Active' }).nth(5);
        this.inactiveview = this.page.getByRole('button', { name: 'Inactive' }).nth(2);
        this.searchtext = this.page.getByPlaceholder("Search for Resource Name or Email...");
        this.actionview = this.page.getByTitle("View").nth(0);//for assertion, 7 elements total
        this.actionedit = this.page.getByTitle("Edit").nth(0);
        this.actionprojectmapping = this.page.getByTitle("Project Mapping").nth(0);
        this.actioninactive = this.page.getByTitle("Inactive").nth(0);
        this.actionsync = this.page.getByTitle("Sync").nth(0);
        this.actionlock = this.page.getByTitle("You cannot delete your own account.");
        /* for negative testing
        this.mandatoryFields={'First Name':{field: this.page.getByPlaceholder("Enter First Name"), 
                                            error: this.page.getByText("First name is required"),
                                            message: 'First name is required', },
                              'Last Name' :{field: this.page.getByPlaceholder("Enter Last Name"),
                                            error: this.page.getByText("Last name is required"),
                                            message: "Last name is required",},
           }       */




    }


    /* async getMandatoryFieldValidationDetails() {
   return Object.entries(this.mandatoryFields);
   } */


    async click_addresource(): Promise<void> {
        await this.addresource.click();
    }
    async close_option() {
        await this.closeop.click();
    }
    async btn_cancel() {
        await this.cancelbtn.click();
    }
    async btn_close() {
        await this.closebtn.click();
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
    async mail_id(value: string): Promise<void> {
        await this.mailid.fill(value);
    }
    async alt_mailid(value: string): Promise<void> {
        await this.altmailid.fill(value);
    }
    async mobile_code(value: string): Promise<void> {
        await this.mobilecode.selectOption(value);
    }
    async mobile_number(value: string): Promise<void> {
        await this.mobilenumber.fill(value);
    }
    async phone_code(value: string): Promise<void> {
        await this.phonenumbercode.selectOption(value);
    }
    async phn_number(value: string): Promise<void> {
        await this.phonenumber.fill(value);
    }

    // custom dropdown
    async manager_op(): Promise<void> {
        await this.manager
    }
    async department_op(): Promise<void> {
        await this.department
    }
    async role_op(): Promise<void> {
        await this.role
    }

    async pg1_saveasdraft(): Promise<void> {
        await this.pg1saveasdraft.click();
    }
    async pg1_next(): Promise<void> {
        await this.pg1next.click();
    }
    async pg1_close(): Promise<void> {
        await this.pg1close.click();
    }
    async salary_pg2(): Promise<void> {
        await this.salaryengagement.click();
    }
    async engagement_typeop(): Promise<void> {
        await this.engagementype.click();
    }
    async select_resrc_type_op(): Promise<void> {
        await this.selectresourcetype.click();
    }
    async annual_sal_op(value: string): Promise<void> {
        await this.annualsalary.fill(value);
    }
    async pg2_saveasdraft(): Promise<void> {
        await this.pg2saveasdraft.click();
    }
    async pg2_next(): Promise<void> {
        await this.pg2next.click();
    }
    async pg2_close(): Promise<void> {
        await this.pg2close.click();
    }
    async pg2_back(): Promise<void> {
        await this.pg2back.click();
    }
    async address_pg3(): Promise<void> {
        await this.address.click();
    }
    async strt_add_op(value: string): Promise<void> {
        await this.strtaddress.fill(value);
    }
    async cityname_op(value: string): Promise<void> {
        await this.cityname.fill(value);
    }
    async zipcode_op(value: string): Promise<void> {
        await this.zipcode.fill(value);
    }
    async slct_country(): Promise<void> {
        await this.selctcountry.click();

    }
    async pg3_saveasdraft(): Promise<void> {
        await this.pg3saveasdraft.click();
    }
    async pg3_next(): Promise<void> {
        await this.pg3next.click();
    }
    async pg3_close(): Promise<void> {
        await this.pg3close.click();
    }
    async pg3_back(): Promise<void> {
        await this.pg3back.click();
    }

    async bankdetails_pg4(): Promise<void> {
        await this.bankdetails.click();
    }
    async bank_name_op(value: string): Promise<void> {
        await this.bankname.fill(value)
    }
    async bank_actname_op(value: string): Promise<void> {
        await this.accountname.fill(value);
    }
    async acctnumber_op(value: string): Promise<void> {
        await this.accountnumber.fill(value);
    }
    async acctroutingnumber_op(value: string): Promise<void> {
        await this.routingnumber.fill(value);
    }
    async swiftnumber_op(value: string): Promise<void> {
        await this.swiftnumber.fill(value);
    }

    async pg4_saveasdraft(): Promise<void> {
        await this.pg4saveasdraft.click();
    }
    async pg4_addresource(): Promise<void> {
        await this.pg4addresourcee.click();
    }
    async pg4_close(): Promise<void> {
        await this.pg4close.click();
    }
    async pg4_back(): Promise<void> {
        await this.pg4back.click();
    }


    async click_refresh(): Promise<void> {
        await this.refreshbtn.click();
    }


    async download_resourcelist(format: 'pdf' | 'excel', fileName: string): Promise<string> {
        const downloadPromise = this.page.waitForEvent('download');
        await this.resourcedownload.click();
        if (format === 'pdf') {
            await this.pdfdownload.click()
        }
        else {
            await this.exceldownload.click();
        }
        const download = await downloadPromise;
        const extension = format === 'pdf' ? 'pdf' : 'xlsx';
        const timestamp = new Date().toLocaleString().replace(/[/:, ]/g, '_').replace(/_+/g, '_');
        const filePath = path.join(process.cwd(), 'downloads', `${fileName}_${timestamp}.${extension}`);
        await download.saveAs(filePath);
        return filePath;

    }

    async btn_status(): Promise<void> {
        await this.statusviewbtn.click();
    }
    async active_sts_view(): Promise<void> {
        await this.activeview.click();
    }
    async inactive_sts_view(): Promise<void> {
        await this.inactiveview.click();
    }
    async search_field(value: string): Promise<void> {
        await this.searchtext.fill(value)
    }
    async viewbtn_action(): Promise<void> {
        await this.actionview.click();
    }
    async editbtn_action(): Promise<void> {
        await this.actionedit.click();
    }
    async projectmapping_action(): Promise<void> {
        await this.actionprojectmapping.click();
    }
    async inactive_action(): Promise<void> {
        await this.actioninactive.click();
    }
    async lock_sts_action(): Promise<void> {
        await this.actionlock.click();
    }




}