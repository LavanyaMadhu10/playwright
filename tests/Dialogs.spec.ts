import {test} from '@playwright/test';

test.only("Dialogs", async ({page}) => {

    await page.goto ("https://testautomationpractice.blogspot.com/")

  //! Evennt Listeners -->
  
  page.on("dialog", async (dialog) => {
    if (dialog.type() == "alert") {
        await dialog.accept()
    }
    else if (dialog.type() == "confirm") {
        console.log(await dialog.message());
    }
    else if (dialog.type() == "prompt") {
        console.log(await dialog.defaultValue());
        await dialog.accept("Lavi")
    }
  })

  await page.getByRole("button", {name:"Simple Alert",exact:true}).click()

  await page.getByRole("button", {name:"Confirmation Alert",exact:true}).click()

  await page.getByRole("button", {name:"Prompt Alert",exact:true}).click()
})

/**
 * page.on --> handle all the dialogs in the test block
 * page.once -->it will handle only the first occurrence of the dialog in the test block
 */
  

//Assignment on page.onc

test(" Assignment on dialogs", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/js-dialogs");

    // 1. Handle JS Alert
    page.once("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.getByRole("button", { name: "Js Alert" }).click();

    // 2. Handle JS Confirm
    page.once("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.getByRole("button", { name: "Js Confirm" }).click();

    // 3. Handle JS Prompt
    page.once("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept("Lavanya");
    });
    await page.getByRole("button", { name: "Js Prompt" }).click();

});  

