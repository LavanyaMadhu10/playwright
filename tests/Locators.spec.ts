import{test}from'@playwright/test'
test("cssLocators", async ({page}) => {
    await page .goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("[id='name']").fill("Lavanya")
    await page.locator("input#email").fill("Lavanya@gmail.com")
    await page.goto("https://saucedemo.com/")
    await page.locator("input.submit-button").click()
})
