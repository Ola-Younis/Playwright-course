import { type Page , test , Expect, expect } from "@playwright/test"; 
import { loginPage  } from "./loginPage.ts";

test.use({
    launchOptions: { slowMo : 800},
});

test("Valid login", async ({page}) => {
 const validLogin = new loginPage(page);

 await validLogin.open();
 await validLogin.login();

 await expect(page.getByPlaceholder('Username').fill('standard_user'));
 await expect(page.getByPlaceholder('Password').fill('secret_sauce'));
 await expect(page.getByRole('button', { name: 'Login' }));
 await expect(page.locator(".app_logo")).toHaveText("Swag Labs");

})
