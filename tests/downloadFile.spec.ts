import {expect, test} from "@playwright/test"
import path from "path"
import fs from "fs"  //! file system

test("download file", async ({page}) => {

    await page.goto ("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here", {exact: true}).fill("My Downloaded file")
    await page.locator("#fileName").fill("newfile.txt")

    let[downloadfile] = await Promise.all([
        page.waitForEvent("download"),
        page.getByRole ('button', {name: "Download",exact: true}).click()
    ])

    let downloadedfolder = "C:/Users/USER/Desktop/PlayRight/tests/downloadedfolder"

    let filename=downloadfile.suggestedFilename()

    await downloadfile.saveAs(path.join(downloadedfolder, filename))

    let filePath = path.join(downloadedfolder, filename)

    let data=fs.readFileSync(filePath, "utf-8")

    await expect(data).toContain("My Downloaded file")
    // console.log(await downloadfile.path());
})



// test.only("Assignment", async ({page}) => {

//     await page.goto("https://demo.automationtesting.in/FileDownload.html")

//     await page.locator('//textarea[@id="textbox"]').fill("hey lavi have a nice day")

//     await page.getByRole('button', {name: "Generate File", exact: true}).click()

// await page.locator('#link-to-download').click()
