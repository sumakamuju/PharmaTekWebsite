import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';

export class SecurityPage extends BasePage {

    security: Locator;
    resourcescreenmapping: Locator;


    constructor(page: Page) {
        super(page);
        this.security = this.page.getByRole('link', { name: 'Security' });
        this.resourcescreenmapping = this.page.getByRole('link', { name: 'Resource Screen Mapping' });



    }
    async security_op() {
        await this.security.click();

    }
    async resourcesscreeningmapping_security() {
        await this.resourcescreenmapping.click();
    }




}