import{test}from '@playwright/test';
test.use({
    actionTimeout:20000
})


test('Auto Waits',async({page})=>{
    await page.setDefaultTimeout(25000)

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('//input[@id="username"]').fill("student")

    await page.getByLabel("Paword").fill("Password123")

    await page.getByRole("button",{name:"Submit",exact:true}).click()

})

test('Auto Waits 1',async({page})=>{
    await page.setDefaultTimeout(25000)

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('//input[@id="username"]').fill("student")

    await page.getByLabel("Paword").fill("Password123")

    await page.getByRole("button",{name:"Submit",exact:true}).click()

})
