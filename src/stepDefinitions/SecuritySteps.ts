import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ConfigManager } from '../config/ConfigManager';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboardpage } from '../pages/Dashboardpage/Dashboardpg';
import { SecurityPage } from '../pages/Security/securitypg';

Given('user clicks on Security', async function () {
    this.loginpage = new LoginPage(this.page);
    this.dashboardpg = new Dashboardpage(this.page);
    this.securitypg = new SecurityPage(this.page);
    await this.securitypg.security_op();

});

Then('user clicks on Resource Screen Mapping', async function () {
    console.log("STEP 1 STARTED");
    await this.securitypg.resourcesscreeningmapping_security();
    console.log("Resource Screen Mapping clicked");
});

Then('user redirected to Resource Screen Mapping page', async function () {
    const resourcescreenmapping_url = this.page.url();
    console.log("CURRENT URL:", resourcescreenmapping_url);
    await this.expect(resourcescreenmapping_url).toHaveURL("/resource-mapping");


});

