import {test} from "@playwright/test"
import Login from "../PageObjectModel/loginpage.page"
import data from "../DDT/jsondata.json";


test("Pom login",async({page})=>{

    //creating object of POM class
    let LoginPage=new Login(page)

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await LoginPage.txtUsername.fill("student")
    await LoginPage.txtPassword.fill("Password123")
    await LoginPage.BtnSubmit.click()

})

test("Pom + DDT login",async({page})=>{

    //creating object of POM class
    let LoginPage=new Login(page)

    for(let testdata of data.valid){
        let url=testdata.url
        let username=testdata.username
        let password=testdata.password

        await page.goto(url)
        await LoginPage.txtUsername.fill(username)
        await LoginPage.txtPassword.fill(password)
        await LoginPage.BtnSubmit.click()
    }


})

test.only("pom method",async({page})=>{

    for (let testdata of data.valid){
        let LoginPage=new Login(page)
        //await page.goto(testdata.url)
        await LoginPage.loginMethod(testdata.url,testdata.username,testdata.password)
    }
})