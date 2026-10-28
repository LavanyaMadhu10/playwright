import{test,expect}from "@playwright/test";

test("auto_retrying_assertion",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1");

    await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box");

    await expect (page.getByPlaceholder("Enter your name", { exact: true })).toBeVisible();

    await page.getByPlaceholder("Enter your name", { exact: true }).fill("Lavanya");

    await expect (page.getByPlaceholder("Enter your name", { exact: true })).toHaveValue("Lavanya");

    await expect(page.locator('//h1[text()="Register"]')).toContainText("Regis");

    await expect(page.locator('//h1[text()="Register"]')).toHaveText("Regis");

    await page.screenshot({path:"screenshot/ss1.png"})

    await page.getByPlaceholder("Enter your name", { exact: true }).fill("LAAVI");

    await expect(page).toHaveScreenshot("screenshot/ss1.png")
    
});

test.only ("non retrying assertion",async({page})=>{

    await page .goto("https://demoapps.qspiders.com/ui?scenario=1");

    let text = await page.locator('//h1[text()="Register"]').textContent();

    await expect(text).toContain("Register");

    let title = await page.title();
    let url = await page.url();

    //await page.mouse.click(200,200);

    await expect(title).not.toContain("DemoApps | Qspiders");

    await expect.soft(url).toMatch(/scenario=1/);

    // let status ="hii"
    // await expect(status).toBeTruthy();

    // let name = "Lavanya";
    // await expect (name).toBeUndefined();

    // await expect("hii").toBeTruthy()

})



test("assymetric matchers",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");

    let text=await page.locator('//button').textContent(); //!Register
    //!used to check whether the string contains the expected substring or not
    expect(text).toEqual(expect.stringContaining("Regis"));
    expect(text).toEqual("Regis")

     //!used to check whether the string contains the expected substring or regular expression or not
    expect(text).toEqual(expect.stringMatching(/Register/));

    //!check whether an array contains the specified element or not
    const products = ["Laptop","Mobile","Tablet"];
    expect(products).toEqual(expect.arrayContaining(["Laptop","Tablet"]));

    //!check whether an object contains the specified key-value pair or not
    const user = {
        name:"Lavanya",
        age:22,
        city:"Bangalore"
    }
        expect(user).not.toEqual(expect.objectContaining({
            name:"Lavanya",
            age:23  //!even though the age is not matching if we use .not.toEqual it will pass the test case
        }));

    //!expect.anything() Maatches any value except null or undefined
        let a = true;
        expect(a).toEqual(expect.anything());

        const user1 = {
            name:"Lavanya",
            age:22,
        }

        expect(user1).toEqual({
            name:expect.anything(),
            age:expect.anything()

        })

    //!expect.any()  matches any value of a specified datatype 
        expect (user1).toEqual({
            name:expect.any(String),
            age:expect.any(Number)
        })
       let student = true;
       expect(student).toEqual(expect.any(Boolean));
})


test.only("poll assertion",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await expect.poll (async()=>{
        return await page.title()
    },"poll assertion").toContain("Demo")
})