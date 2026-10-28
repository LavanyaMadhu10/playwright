import {test,expect} from '@playwright/test';
import path from "path";

test("upload files", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

// //!--> Approach 1   

//   //?--- Single file upload

//   await page.locator('#singleFileInput').setInputFiles("C:/Users/USER/Desktop/PlayWright/tests/uploadfile/demo.txt")

//   await page.getByRole('button', {name: "Upload Single File"}).click()

//   //? ----Multiple file upload

//   await page.locator('#multipleFileInput').setInputFiles(["C:/Users/USER/Desktop/PlayWright/tests/uploadfile/demo.txt","C:/Users/USER/Desktop/PlayWright/tests/uploadfile/demo1.txt"])

//   await page.getByRole('button', {name: "Upload Multiple File"}).click()    


//!--> Approach 2      //use the approch for the file which is in the project folder

// await page.locator("#singleFileInput").setInputFiles([path.join(__dirname, "uploadfile/demo.txt"), path.join(__dirname, "uploadfile/demo.txt")])

// await page.getByRole('button', {name: "Upload Single File", exact: true}).click()


//!--> Approach 3     // use the approch for the file which is in the system folder

await page.locator("#singleFileInput").setInputFiles("C:/Users/USER/Desktop/New TS")   //getting error   

await page.getByRole('button', {name: "Upload Single File", exact: true}).click()

await expect(page.locator("#singleFileInput")).not.toHaveText("No file chosen")

//? Multiple file upload

await page .locator ("#multipleFileInput").setInputFiles(["C:/Users/USER/Desktop/New TS","C:/Users/USER/Desktop/Java Script"])
await page.getByRole('button', {name: "Upload Multiple File"}).click()   

await expect(page.locator("#multipleFileInput")).not.toHaveText("No file chosen")

})