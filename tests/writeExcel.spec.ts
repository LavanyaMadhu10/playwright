import {test} from "@playwright/test";
import excel from "exceljs";
import path from "path";


test('Write data to excel', async ({page}) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelFile.xlsx"));

    let sheet = book.getWorksheet("Sheet4");
    if (!sheet) {
        sheet = book.addWorksheet("Sheet4");
    }

    // Write data to the first row
    sheet.getRow(1).getCell(1).value = "Name";
    sheet.getRow(1).getCell(2).value = "Age";
    sheet.getRow(1).getCell(3).value = "City";

    await book.xlsx.writeFile(path.join(__dirname,"../DDT/excelFile.xlsx"));
})

test('write from application', async ({page}) => {           // Getting error while executing
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelFile.xlsx"));
    let sheet = await book.getWorksheet("Sheet5");
    
    if (!sheet) {
        sheet =await book.addWorksheet("Sheet5");
    }
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in",{exact: true}).fill("books");
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor();
    
    let alldata=await page.locator('//div[@class="s-suggestion-container"]').allTextContents();
    console.log(alldata);

    for(let text of alldata){
        let c = alldata.indexOf(text)
        sheet.getRow(c+1).getCell(1).value=text;
    }

    await book.xlsx.writeFile(path.join(__dirname,"../DDT/excelFile.xlsx"));
})
    

test('write from application diagonally', async ({ page }) => {      //Assignment chatgpt

    let book = new excel.Workbook();

    await book.xlsx.readFile(
        path.join(__dirname, "../DDT/excelFile.xlsx")
    );

    let sheet = book.getWorksheet("Sheet6");

    if (!sheet) {
        sheet = book.addWorksheet("Sheet6");
    }

    await page.goto("https://www.amazon.in/");

    await page.getByPlaceholder("Search Amazon.in", { exact: true })
        .fill("books");

    await page.locator('//div[@class="s-suggestion-container"]')
        .first().waitFor();

    let alldata = await page.locator(
        '//div[@class="s-suggestion-container"]'
    ).allTextContents();

    console.log(alldata);

    let i = 1;

    for (let text of alldata) {
        sheet.getRow(i).getCell(i).value = text;
        i++;
    }

    await book.xlsx.writeFile(
        path.join(__dirname, "../DDT/excelFile.xlsx")
    );
});
