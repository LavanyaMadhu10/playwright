/**
 * check()--> used to check the checkbox and Radiobutton
 * uncheck()--> used to uncheck the checkbox and Radiobutton
 */

import {test} from "@playwright/test"

test('Checkbox and Radiobutton actions' , async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")

    await page.locator("#domain_a").check()
    await page.locator("#domain_b").check()

    await page.locator("#domain_a").uncheck()


})

