
import { test, expect } from "@playwright/test";
import SauceTask2 from "../PageObjectModel/Sauccedemo2.page";

test("Add multiple products and verify cart", async ({ page }) => {
    let sauce2 = new SauceTask2(page);

    await sauce2.launchURL();
    await sauce2.login();

    await expect(page).toHaveURL(/inventory.html/);

    await sauce2.addMultipleProducts();

    await expect(sauce2.cartBadge).toHaveText("2");

    await sauce2.openCart();

    await expect(sauce2.cartItems).toHaveCount(2);
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
    
});
