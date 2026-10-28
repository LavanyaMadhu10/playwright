
import { Page, Locator } from "@playwright/test";

class SauceTask3 {
    // Declaring the properties
    page: Page;
    username: Locator;
    password: Locator;
    loginButton: Locator;
    backpack: Locator;
    tshirt: Locator;
    cartIcon: Locator;
    cartBadge: Locator;
    cartItems: Locator;
    removeBackpackButton: Locator;
    continueShoppingButton: Locator;

    // Initializing the properties
    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.tshirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.cartIcon = page.locator(".shopping_cart_link");
        this.cartBadge = page.locator(".shopping_cart_badge");
        this.cartItems = page.locator(".cart_item");
        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }

    // Launch URL
    async launchURL() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    // Login
    async login() {
        await this.username.fill("standard_user");
        await this.password.fill("secret_sauce");
        await this.loginButton.click();
    }

    // Add two products
    async addProducts() {
        await this.backpack.click();
        await this.tshirt.click();
    }

    // Open cart
    async openCart() {
        await this.cartIcon.click();
    }

    // Remove backpack
    async removeBackpack() {
        await this.removeBackpackButton.click();
    }

    // Continue shopping
    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}

export default SauceTask3;
