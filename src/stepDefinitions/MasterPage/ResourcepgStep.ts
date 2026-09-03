import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { MasterPage } from "../../pages/MasterPage/MasterPage";
import { ResourcesPage } from "../../pages/MasterPage/ResourcesPage";
import fs from'fs'
import { PDFParse } from "pdf-parse"; 
import * as xlsx from 'xlsx';
import { ResourceReport } from "../../types/ResourceReport";
import { newresourcedata } from "../../data/test-data/NewResourceData";

Given('user clicks on master module and on resource option', async function () {
  this.loginpage = new LoginPage(this.page);
  this.masterpage = new MasterPage(this.page);
  this.resourcespg=new ResourcesPage(this.page);
  await this.masterpage.master_op();
  await this.masterpage.resources_master();
});

// @TC-01-Verify Add Resource Page
When('user clicks on add resource', async function () {
    await this.resourcespg.click_addresource();
});

Then('a new add resource form to be displayed',async function () {
  const newresource=this.resourcespg.addnewresource;
  await expect(newresource).toBeVisible();
});

When('user clicks on close option of the page window',async function(){
  await this.resourcespg.close_option();
});

Then('a confirmation message box appears to close or cancel it', async function(){
  const confrmsgbox=this.resourcespg.confrmsg;
  await expect(confrmsgbox).toHaveText("Are you sure?");

});
Then('user clicks on close or cancel option on the message window',async function(){
 // await this.resourcespg.btn_cancel();
  await this.resourcespg.btn_close();

});

//TC-2-Verify next button on the resource page 
When('enter details in the fields and clicks on next button',async function () {
 await this.resourcespg.first_name(newresourcedata.firstname);
 await this.resourcespg.last_name(newresourcedata.lastname);
 await this.resourcespg.pg1_next();
 await this.resourcespg.select_resrc_type_op();
 await this.resourcespg.pg2_next();
 await this.resourcespg.slct_country();
 await this.resourcespg.pg3_next();
});

//TC-3-Verify back button on the resource page
When('enter details in fields and clicks on back button',async function () {
 await this.resourcespg.first_name(newresourcedata.firstname);
 await this.resourcespg.last_name(newresourcedata.lastname);
 await this.resourcespg.pg1_next();
 await this.resourcespg.select_resrc_type_op();
  await this.resourcespg.pg2_next();
 await this.resourcespg.slct_country();
 await this.resourcespg.pg3_next();
 await this.resourcespg.pg3_back();
 await this.resourcespg.pg2_back();
});

Then('user should be redirected to the previously opened page',async function () {
  const pgurl= this.page.url();
  console.log("current url:", pgurl)
  await expect(pgurl).toHaveURL("");
});

//TC-4-Verify Role option on the resource page 
When('enter details in fields',async function(){
  await this.resourcespg.first_name(newresourcedata.firstname);
  await this.resourcespg.last_name(newresourcedata.lastname);
  await this.resourcespg.mail_id(newresourcedata.mailid);
  await this.resourcespg.mobile_code("+91");
  await this.resourcespg.mobile_number(newresourcedata.mobilenumber);
  

});

When('user selects Vendor Admin in the role option',async function () {
  await this.resourcespg.role_op();
});

Then('options related to vendor admin have to be displayed on the page',async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


//TC-5-Verify that a new resource is added and the resource list is refreshed with the newly added resource 
When('the user clicks on add resource button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('new resource should be registered successfully', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('user clicks on refresh button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the newly registered resource should be added to the resource list', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//TC-6-Verify resource can be saved as draft without completing mandatory fields
When('the user enters partial resource details', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user clicks on the Save as Draft button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the resource should be saved successfully as a draft', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//TC-7-Verify resource list download in PDF format
When('user downloads the PDF file', async function () {
  this.downloadedFilePath =await this.resourcespg.download_resourcelist('pdf','Resource_List.pdf');
});

Then('verify the file contents of downloaded pdf file', async function(){
  if(fs.existsSync( this.downloadedFilePath)){
    console.log("PDF was downloaded successfully");
    const pdfBuffer=fs.readFileSync(this.downloadedFilePath);
    const parser= new PDFParse({data: pdfBuffer});
    const result= await parser.getText();
   // console.log(result.text);
   await parser.destroy();
   expect(result.text).toContain('Resources Report');
  }
});

//TC-8-Verify resource list download in Excel formats
When('user downloads the Excel file', async function () {
  this.downloadedFilePath =await this.resourcespg.download_resourcelist('excel','Resource_List.xlsx');
});

Then('verify the file contents of downloaded excel file', async function(){
  const workbook=xlsx.readFile(this.downloadedFilePath);
  const sheetName= workbook.SheetNames[0];
  const worksheet= workbook.Sheets[sheetName];
  const rows=xlsx.utils.sheet_to_json<ResourceReport>(worksheet,{range:1});
  console.log(rows);
  expect(rows[2]["Full Name"]).toBe("Lavanya Kolla");
});


//TC-9-Display resources based on selected resource status
When('the user clicks on the Resource Status dropdown',async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user selects {string} status',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('only resources with {string} status should be displayed',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//TC-10-Validate resource search by name or email or mobile number
When('the user enters {string} in the search field',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('only records matching {string} should be displayed',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//TC-11-Verify view button on the list
When('user clicks on view button on the page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('resource details should be displayed', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//TC-12- Verify edit button on the list 
When('user clicks on edit button on the page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//TC-13-Verify project mapping button on the list 
When('user clicks on project mapping button on the page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('resource details should be displayed and editable', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});




//@NEGATIVE TESTING
//TC-NEG-1-Add New Resource with empty fields 
When('user clicks on save button without entering details in mandatory fields',async function () {
  await this.resourcespg.pg1_next();
  await this.resourcespg.pg2_next();
  await this.resourcespg.pg3_next();
  
  await this.resourcespg.pg4_addresource();
});

Then('validation message should be displayed for mandatory fields',async function () {
 /* const mandatoryFields= await this.resourcespg.getMandatoryFieldValidationDetails();
 for(const[fieldName, fieldDetails] of mandatoryFields){
 await expect(fieldDetails.field,`${fieldName} should be marked as invalid`).toHaveClass(/is-invalid/);
 await expect(fieldDetails.error,`validation message should be displayed for ${fieldName}`).toBeVisible();
 await expect(fieldDetails.error,`Incorrect validation message for ${fieldName}`).toHaveText(fieldDetails.message);
 } */
const firstnameerrmsg = this.page.getByText("First name is required");
await expect(firstnameerrmsg).toHaveText("First name is required");
});

//TC-NEG-2
When('user enters valid details in all mandatory fields except {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user clicks on save button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('a validation message should be displayed for {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//TC-NEG-3
When('the user enters valid details in all mandatory fields', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user enters {string} in the field', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the validation message should be displayed for the field', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


//TC-NEG-4-Verify validation for invalid first name and last name
When('the user enters {string} in the name field', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the validation message should be displayed for the First Name field', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//TC-6-Verify validation of resource with existing Email ID
When('the user enters existing email ID {string} in the Email ID field', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('a validation message should be displayed', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//TC-7-Verify resource details are not saved when the form is closed
When('the user enters resource details in the form', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user clicks on the Close button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user opens the Add New Resource form again', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the previously entered resource details should not be displayed', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});



