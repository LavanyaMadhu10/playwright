import {test} from "@playwright/test"

test("test1", async ({page}) => {
    console.log("test1");
})
test("test2", async ({page}) => {
    console.log("test2")
})
test("test3", async ({page}) => {
    console.log("test3")
await page.goto("https://amazon.com/")
})

test.describe("Logintest",()=>{
    test("validcredientials",async({page})=>{
        console.log("valid Login test")
    })

    test("invalidcredientials",async({page})=>{
        console.log("Invalid Login test")
    })
})

test("timeout",async({page})=>{
    test.setTimeout(60000)
    await page.goto("https://amazon.com/")
})