import{expect, test} from "@playwright/test"

test("element_based_waits",async({page})=>{
    await page.goto ("https://www.amazon.in")

    await page.getByPlaceholder('Search Amazon.in',{exact:true}).fill("shoes")

    // await page.locator(".s-suggestion-co").first().waitfor({timeout:20000,state:"detached"})

    await page.waitForSelector(".s-suggestion-container")

    let suggestion=await page.locator(".s-suggestion-container").allTextContents()

    console.log(suggestion);
})

test.only("waitFornavigation",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

//     await Promise.all([
// page.waitForNavigation(),
// page.getByText("Check Box",{exact:true}).click()

//     ])

await Promise.all([   
page.waitForURL("https://demoapps.qspiders.com/ui/checkbox"),
page.getByText("Check Box",{exact:true}).click()
])

await page.waitForLoadState("networkidle")

//! load -->  Default state-->it will wait until all the html ,css,js,other resources will be loaded

//! domcontentloaded --> it will just wait for the html part not for css,js,other resources

//! networkidle --> it will wait untill there is no network request for 500ms

await expect (page).toHaveURL("https://demoapps.qspiders.com/ui/checkbox")

})



test("waitforEvent",async ({page})=>{
   await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")

   await page.getByPlaceholder("Enter text here",{exact:true}).fill("i am downloading the file")

   let [downloadfile]= await Promise.all([
    page.waitForEvent("download"),
    page.locator("#downloadButton").click()
   ])

})



test.only("custom waits",async({page})=>{

    await page.goto("https://www.amazon.in")

    await page.waitForFunction(()=>{
        return document.readyState === "complete"
        //! document.readystate -->  it will check the html dom structure that is the elements are not loaded / elements are on readystate to perform actions or not
})
await page.getByPlaceholder("Search Aamzon.in",{exact:true}).fill("shoes")

await page.waitForFunction(()=>{
    let ele= document.querySelectorAll(".s-suggestion-container")
    return ele.length>1
})
})