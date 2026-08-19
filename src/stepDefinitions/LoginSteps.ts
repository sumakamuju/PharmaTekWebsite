import{Given, When, Then} from '@cucumber/cucumber';
import{expect} from '@playwright/test';
import{LoginPage} from '../pages/LoginPage/LoginPage';
import { ConfigManager } from '../config/ConfigManager';


let loginpage: LoginPage;

Given("user navigates to the login page", async function(){
    await this.page.goto(ConfigManager.BASE_URL,{waitUntil: "load", timeout:90000});
    
})

When("user enters accountid and email and password", async function(){
    this.loginpage= new LoginPage(this.page);
   // await page.locator('#accountId').fill(accountId, { timeout: 30000 });
    await this.loginpage.enteracctid(ConfigManager.ACCOUNT_ID);
    await this.loginpage.enteremail(ConfigManager.EMAIL);
    await this.loginpage.enterpsswd(ConfigManager.PASSWORD);
})
When("user clicks on signin button", async function()
{
await this.loginpage.clicksignin();

})

Then("user redirected to user dashboard page", async function(){
    console.log("STEP STARTED");

    const url = this.page.url();

    console.log("CURRENT URL:", url); 

    await expect(this.page).toHaveURL("http://183.82.98.147/pharmatekdev/dashboard");
})

When('user enters {string} and {string} and {string}', async function (accountid: string, email: string, password: string) {
    await this.loginpage.enteracctid(accountid);
    await this.loginpage.enteremail(email);
    await this.loginpage.enterpsswd(password);
    
});
Then("user should stay in login page", async function(){
    console.log("STEP STARTED");

    const url = this.page.url();

    console.log("CURRENT URL:", url);

    await expect(this.page).toHaveURL("http://183.82.98.147/pharmatekdev/login");
})
