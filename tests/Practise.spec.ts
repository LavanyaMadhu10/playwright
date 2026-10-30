import{test}from'@playwright/test'       //Assignment 1.
test("Olympics", async ({page}) => {
    await page .goto("https://www.olympics.com/en/olympic-games/tokyo-2020")
    await page.locator("text=See Table").click() 
    await page.locator("text=Athletes").click()
    const gold = page.locator("text=Emma McKeon").locator("..").locator("td").nth(2) 
    console.log(await gold.innerText()) })
    // need to practise above one is not working

//7.

test.only("make_my_trip", async ({page}) => {
    await page.goto("https://www.makemytrip.com/")

    await page.click('//span[text()="Departure"]')
    // only applicale for css  and xpath not for getbyMethod

    // await page.locator('//span[@aria-label="Next Month"]').click()
    // await page.locator('//span[@aria-label="Next Month"]').click()
    // await page.locator('//span[@aria-label="Next Month"]').click()

    let nextmonth=await page.locator('//span[@aria-label="Next Month"]')
    for(let i=0;i<3;i++){
        await nextmonth.click()
    }

    await page.locator('//div[@class="DayPicker-Day" and @aria-label="Sun Jan 24 2027"]').click()

})

//4
// test.only("icc cricket rankings", async ({page}) => {
// await page.goto("https://www.icc-cricket.com/rankings")

// let name = "Steve"

// let ratings=await page.textContent('//span[text()="${nmae}"]/ancestor::td[@class="]