
import { test, expect } from "@playwright/test";
import SauceTask3 from "../PageObjectModel/Saucedemo3.page";

test("Remove a product from cart", async ({ page }) => {
    let sauce = new SauceTask3(page);

    // Launch application and login
    await sauce.launchURL();
    await sauce.login();

    // Add two products
    await sauce.addProducts();

    // Verify cart badge
    await expect(page.locator(".shopping_cart_badge")).toHaveText("2");

    // Open cart
    await page.locator(".shopping_cart_link").click();

    // Verify two products are present
    await expect(page.locator(".cart_item")).toHaveCount(2);

    // Remove backpack
    await sauce.removeBackpack();

    // Verify only one product remains
    await expect(page.locator(".cart_item")).toHaveCount(1);

    // Verify remaining product
    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText("Sauce Labs Bolt T-Shirt")

    // Verify cart badge
    await expect(page.locator(".shopping_cart_badge")).toHaveText("1");

    // Continue shopping
    await sauce.continueShopping();

    // Verify inventory page
    await expect(page).toHaveURL(/inventory.html/);
});
