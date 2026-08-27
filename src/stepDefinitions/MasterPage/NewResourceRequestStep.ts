import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { MasterPage } from "../../pages/MasterPage/MasterPage";
import { NewResourceReqPg } from "../../pages/MasterPage/NewResourceRequestpg";
import fs from 'fs';
//import pdfParse from 'pdf-parse';
import { PDFParse } from 'pdf-parse';
import * as xlsx from 'xlsx';
import { ResourceRequestRow } from '../../types/ResourceRequestRow';
import { newresourcereqstData } from "../../data/test-data/NewresourcerequestDetails";

Given('user clicks on master option and on new resource request option', async function () {
  this.loginpage = new LoginPage(this.page);
  this.masterpage = new MasterPage(this.page);
  this.newresrcreqpg = new NewResourceReqPg(this.page);
  await this.masterpage.master_op();
  await this.masterpage.new_resrc_req();
});

When('user clicks on add resource request option', async function () {
  await this.newresrcreqpg.add_resc_req();
});

Then('new resource request form to be displayed', async function () {
  const form_title=this.newresrcreqpg.newresrcreqformtitle;
  await expect(form_title).toBeVisible();
});

 When('user enters text fields', async function () {
  await this.newresrcreqpg.first_name(newresourcereqstData.firstname);
  await this.newresrcreqpg.last_name(newresourcereqstData.lastname);
  await this.newresrcreqpg.email_field(newresourcereqstData.email);
  await this.newresrcreqpg.mobile_code_field("+91");
  await this.newresrcreqpg.mobile_number_field(newresourcereqstData.mobilenumber);
});

Then('clicks on cancel or save option', async function () {
  await this.newresrcreqpg.save_data();
});
 
When('user clicks on close option of the form page', async function () {
  await this.newresrcreqpg.close_window();
});

When('message window to be displayed with options', async function () {
const closemsg= this.newresrcreqpg.closeconfirmationmsg;
await expect(closemsg).toBeVisible();
});

Then('user clicks on close or yes, Cancel it option', async function () {
  //await this.newresrcreqpg.close_option();
  await this.newresrcreqpg.cancel_option();
});

When('user clicks on download option and selects excel or pdf format', async function () {
  // this.downloadedFilePath = await this.newresrcreqpg.download_pdf();
   this.downloadedFilePath = await this.newresrcreqpg.download_excel();
});

Then('verify the downloaded pdf file', async function () {
  
  //expect(fs.existsSync(this.downloadedFilePath)).toBeTruthy();
   
  if (fs.existsSync(this.downloadedFilePath)) {
    console.log('PDF was downloaded successfully');

    const pdfBuffer=fs.readFileSync(this.downloadedFilePath);
    
    // const pdfData= await pdfParse(pdfBuffer); import issue
    // console.log(pdfData.text);
   
    const parser= new PDFParse({data: pdfBuffer});
    const result= await parser.getText();
    console.log(result.text);
    await parser.destroy();
    expect(result.text).toContain('Resource Requests Report');
}  
});

Then('verify the downloaded excel file', async function(){
  const workbook= xlsx.readFile(this.downloadedFilePath);
  const sheetName= workbook.SheetNames[0];
  const worksheet= workbook.Sheets[sheetName];
  //const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
 const rows=xlsx.utils.sheet_to_json<ResourceRequestRow>(worksheet,{range: 1});
  console.log(rows);

  expect(rows[1].Name).toBe('Venkat Guttula');



});

When('user enters a name or email in the search field', async function () {
  await this.newresrcreqpg.search_field("venkat");
});

Then('only the matching records should be displayed in the list', async function () {
  const search_res=this.newresrcreqpg.searchres;
  await expect(search_res).toContainText(/venkat/i);
}); 