import {test} from '@playwright/test'

test("Hard_coded_Waits",async({page})=>{

    await page .waitForTimeout(2000)
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page .waitForTimeout(2000)

     await page.locator('//input[@id="username"]').fill("student")
     await page .waitForTimeout(2000)   
     
     await page.getByLabel("Paword").fill("Password123")
    await page .waitForTimeout(2000) 
    
     await page.getByRole("button",{name:"Submit",exact:true}).click()
     await page .waitForTimeout(2000) 
    
})

