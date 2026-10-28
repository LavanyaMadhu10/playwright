import {test} from '@playwright/test';
import excel from 'exceljs';
import path from 'path';

test('Read single data', async ({page}) => {

    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelFile.xlsx"));

    let sheet = book.getWorksheet("Sheet1");
    let data = await sheet?.getRow(1).getCell(1).toString();
    console.log(data);

    let data2 = await sheet!.getRow(1).getCell(2).toString();
    console.log(data2);

    let data3 = await sheet?.getRow(2).getCell(1).toString();
    console.log(data3);
})

test('Read multiple data', async ({page}) => {

    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelFile.xlsx"));

    let sheet = book.getWorksheet("Sheet2");

    for (let col = 1; col <= sheet!.actualColumnCount; col++) {
        for (let row = 1; row <= sheet!.actualRowCount; row++) {
            let data = await sheet?.getRow(row).getCell(col).toString();
            console.log(data);
        }
    }
})

test.only("for application", async ({page}) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelFile.xlsx"));

    let sheet = book.getWorksheet("Sheet3");
    let allData:any[]= [];
    let headers=sheet?.getRow(1).values;

    let urlIndex:number=-1;  //1
    let usernameIndex:number=-1; //2
    let passwordIndex:number=-1; //3
    if(Array.isArray(headers)){
        urlIndex=headers.findIndex((value)=>value==="url");
        usernameIndex=headers.findIndex((value)=>value==="username");
        passwordIndex=headers.findIndex((value)=>value==="password");
    }

    for (let row = 2; row <= sheet!.actualRowCount; row++) {
        let url = sheet?.getRow(row).getCell(urlIndex).toString();
        let username = sheet?.getRow(row).getCell(usernameIndex).toString();
        let password = sheet?.getRow(row).getCell(passwordIndex).toString();
        allData.push({
            link:url,
            username:username,
            password:password
        });


    console.log(allData);

    for(let d of allData){
        await page.goto(d.link);
        await page.getByLabel("Username",{exact:true}).fill(d.username);
        await page.getByLabel("Password",{exact:true}).fill(d.password);
        await page.getByRole("button",{name:"Submit"}).click();
    }
}
})