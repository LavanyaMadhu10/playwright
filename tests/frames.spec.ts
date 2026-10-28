import {test,expect} from '@playwright/test';

test.only("frame intro", async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //!Approach 1-->

    // await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]').fill("Hey LAvi")

    let frame1 = await page.frameLocator('//frame[@src="frame_1.html"]')
    await frame1.locator('[name="mytext1"]').fill("Hey Lavi")

    //!Approach 2-->

    let frame2 = await page.locator('//frame[@src="frame_2.html"]').contentFrame()
    await frame2.locator('[name="mytext2"]').fill("bye")

    //frame 5

    let frame5 = await page.frameLocator('//frame[@src="frame_5.html"]')
    await frame5.locator('[name="mytext5"]').fill("how are you?")

    //frame 4

    let frame4 = await page.frameLocator('//frame[@src="frame_4.html"]')
    await frame4.locator('[name="mytext4"]').fill("all the best")
})

test("Nested Frames", async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    let frame3 = await page.frameLocator('//frame[@src="frame_3.html"]')
    await frame3.locator('[name="mytext3"]').fill("Hellooo")
    await expect(frame3.locator('[name="mytext3"]')).toHaveValue("Hellooo")

    let radioButton = await frame3.frameLocator('//iframe').locator('(//div[@class="AB7Lab Id5V1"])[2]')
    await radioButton.check()

    await expect(radioButton).toBeChecked()

})