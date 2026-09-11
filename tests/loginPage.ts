import {type Page , test} from "@playwright/test";
import {BasePage} from "./basepage.ts";

export class loginPage extends BasePage{
    constructor (page : Page){
        super(page);
    }

override async open(): Promise<void> {
    await super.open();
    await this.page.getByPlaceholder('Username').fill('standard_user');
    await this.page.getByPlaceholder('Password').fill('secret_sauce');
}
async login(): Promise<void> {
    await this.page.getByRole('button', { name: 'Login' }).click();

}
async validLogin(): Promise<void> {

await this.page.locator(".app_logo")
  }

}