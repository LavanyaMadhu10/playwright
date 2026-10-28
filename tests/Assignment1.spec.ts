// import{test}from"@playwright/test";

// test("Assignment1",async({page})=>{

// await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// await page.getByLabel("Username").fill("Harini")
// await page.getByLabel("Password").fill("Harini@123")
// await page.getByRole("button",{name:"Login"}).click()
// })


// import { test } from "@playwright/test";

test("Amazon XPath Scenario", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    // Search Shoes
    await page.locator("//input[@id='twotabsearchtextbox']").fill("Shoes");
    await page.locator("//input[@id='nav-search-submit-button']").click();

    // Fetch first product name
    let productName = await page.locator("(//div[@data-component-type='s-search-result']//h2)[1]").innerText();

    // Fetch first product price
    let productPrice = await page.locator("(//div[@data-component-type='s-search-result']//span[@class='a-price-whole'])[1]").innerText();

    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice);
});

test ("Amazon finding 7th product and parice",async({page})=>{

    await page.goto("https://www.amazon.in/");

    //search for mobile
    await page.locator(".nav-search-field").fill("Mobiles")
    await page.locator(".nav-search-submit nav-bluebeacon").click()

})


// import { test } from "@playwright/test";

test("Amazon finding 7th product and price", async ({ page }) => {

    await page.goto("https://www.amazon.in/");

    // Search for mobile
    await page.locator("#twotabsearchtextbox").fill("Mobiles");
    await page.locator("#nav-search-submit-button").click();

    // Locate the 7th product
    let seventhProduct = page.locator("[data-component-type='s-search-result']").nth(6);

    // Get product name
    let productName = await seventhProduct.locator("h2").innerText();

    // Get product price
    let productPrice = await seventhProduct.locator(".a-price-whole").innerText();

    console.log("7th Product:", productName);
    console.log("7th Product Price:", productPrice);
})


 import {test,expect} from "@playwright/test"

test.only("Fill all details using mouse and keyboard actions", async ({ page }) => {

    await page .goto("https://demoqa.com/automation-practice-form")
// fill the first name
    await page.getByPlaceholder("First Name").click()
    await page.keyboard.insertText("Lavanya")

    await expect (page.getByPlaceholder("First Name", { exact: true })).toHaveValue("Lavanya")

// fill the last name 
    await page.keyboard.press("Tab")
    await page.keyboard.insertText("VenuGopal")
    

// fill the email
     await page.mouse.click(500, 300);
     await page.keyboard.insertText("Lavi@gmail.com")

// fill the gender 
await page.locator("#gender-radio-2").check()

// fill mobile no
await page.keyboard.press("Tab")
await page.keyboard.type("1234567890")

// Date of birth
 await page.locator("#dateOfBirthInput").click();
  await page.keyboard.press("Control+A");
  await page.keyboard.type("11 Jan 2002")
  await page.keyboard.press("Escape");
 
  await expect(page.locator("#dateOfBirthInput")).toHaveValue("11 Jan 2002");

// Subjects 
  let subjectsInput = page.locator("#subjectsInput");
  await subjectsInput.click();
  await page.keyboard.type("Maths");
  await page.keyboard.press("Enter");
 
  await expect(page.locator("#subjectsContainer")).toContainText("Maths")

// Hobbies
await page.getByText("Music").check()

//Current address

await page.locator("#currentAddress").click()
await page.keyboard.type("121, Kumaran Street, Erode")
await expect(page.locator("#currentAddress")).toHaveValue("121, Kumaran Street, Erode");

// state
  const stateDropdown = page.locator("#state");
  await stateDropdown.click();
  await page.keyboard.type("NCR");
  await page.keyboard.press("Enter");
 
  await expect(page.locator("#state")).toContainText("NCR");
 
  //  City 
  const cityDropdown = page.locator("#city");
  await cityDropdown.click();
  await page.keyboard.type("Delhi");
  await page.keyboard.press("Enter");
 
  await expect(page.locator("#city")).toContainText("Delhi");

  //submit
  await page.getByText("Submit").click()

})