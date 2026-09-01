import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { MasterPage } from "../../pages/MasterPage/MasterPage";
import { ResourcesPage } from "../../pages/MasterPage/ResourcesPage";
import fs from'fs'
import { PDFParse } from "pdf-parse"; 
import * as xlsx from 'xlsx';
Given('user clicks on master module and on resource option', async function () {
  this.loginpage = new LoginPage(this.page);
  this.masterpage = new MasterPage(this.page);
  this.resourcespg=new ResourcesPage(this.page);
  await this.masterpage.master_op();
  await this.masterpage.resources_master();
});

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

When('user downloads the Excel file', async function () {
  this.downloadedFilePath =await this.resourcespg.download_resourcelist('excel','Resource_List.xlsx');
});

Then('verify the file contents of downloaded excel file', async function(){
  const workbook=xlsx.readFile(this.downloadedFilePath);
  const sheetName= workbook.SheetNames[0];
  const worksheet= workbook.Sheets[sheetName];
  const rows=xlsx.utils.sheet_to_json(worksheet,{range:1});
  console.log(rows);
  //expect(rows[1].)
});


When('the user selects {string} format',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the {string} file should be downloaded successfully',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the downloaded {string} file should contain the resource records displayed in the list',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

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

When('the user enters {string} in the search field',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('only records matching {string} should be displayed',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user clicks on the Refresh button',async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the resource list should be refreshed successfully',async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the latest resource records should be displayed',async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


//@NEGATIVE TESTING

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




