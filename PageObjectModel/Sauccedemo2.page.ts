
import { Page, Locator } from "@playwright/test";

class SauceTask2 {
    page: Page;
    username: Locator;
    password: Locator;
    loginButton: Locator;
    backpack: Locator;
    tshirt: Locator;
    cartIcon: Locator;
    cartBadge: Locator;
    cartItems: Locator;

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
    }

    async launchURL() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login() {
        await this.username.fill("standard_user");
        await this.password.fill("secret_sauce");
        await this.loginButton.click();
    }

    async addMultipleProducts() {
        await this.backpack.click();
        await this.tshirt.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }
}

export default SauceTask2;
