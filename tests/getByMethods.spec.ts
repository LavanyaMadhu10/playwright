import{test}from'@playwright/test'
test("getBymethods", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //getByLabel
    await page.getByLabel("Name").fill("Lavanya")
    //getByPlaceholder
    await page.getByPlaceholder("Enter your Email").type("Lavanya@gmail.com")
    //getByText
    await page.getByText("Register").last().click()
    //getByAltText
    await page.getByAltText("signin").click()
    // await page .goto("https://demowebshop.tricentis.com/")
    // await page.getByAltText("Tricentis Demo Web Shop").click()
    //  click on with tool Tip element
    await page .getByText("With ToolTip").click()
    // getByTitle
    await page.getByTitle("Enter your Name").fill("Lavanya")
    await page .goto("https://demowebshop.tricentis.com/")
    //getByRole
    await page.getByRole("button",{name:'search'}).click();
    //getByTestId
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("Laavi")
})