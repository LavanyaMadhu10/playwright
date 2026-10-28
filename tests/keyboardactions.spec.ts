/**
 * 1.press()
 * 2.insertText()
 * 3.type()
 * 4.down()
 * 5.up()
 */

import {test} from "@playwright/test"

test("type(),insertText()",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.getByPlaceholder("Enter your name",{exact:true}).click()

    await page.keyboard.type("Lavanya")
    //! type()--> is used to fill the text in human format if the element is focused

    await page.keyboard.insertText("VenuGopal")
    //! insertext()--> is used to fill the text in the focused element in one go

    await page.keyboard.press("Control+A") // to select all the text
    await page.keyboard.press("Control+C") // to copy the selected text

    await page.keyboard.press("Tab")
    
    await page.keyboard.press("Control+V") // to paste the copied text
    //! press()-->  used to press the keyborad key [combination of keys also]

    await page.keyboard.down("Tab")
    //! down()--> press the keyboard key but not release it

    await page.keyboard.up("Tab")
    //! up()--> it will release the keyboard key 

    await page.keyboard.insertText("Lavi@123")
    await page.locator('//span[@="absolute text-slate-600 text-[18px] bg-gray-100"]').click()

})

test.only("Assignment on kbActions",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#username").click()
    await page.keyboard.insertText("Student")
    await page.keyboard.down("Space")
    await page.keyboard.up("Space")
    await page.keyboard.type("stud")
    await page.keyboard.press("Control+A") 
    await page.keyboard.press("Control+C") 
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.locator("#submit").click()
})



