import { Locator,Page } from "@playwright/test";

class ShopperStack{
    //Declaring the Properties

    page:Page
    txtEmail:Locator
    txtPassword:Locator
    btnLogin:Locator

 constructor (page:Page){
    this.page=page
    this.txtEmail=page.locator("#Email")
    this.txtPassword=page.locator("#Password")
    this.btnLogin=page.locator("#Login")
 }   

 async launchURL(url:any){
        await this.page.goto(url),{waitUntil:'domcontentloaded'}
       }

 async ShopperLogin(Email:any,Passcode:any){
    await this.txtEmail.fill(Email)
    await this.txtPassword.fill(Passcode)
    await this.btnLogin.click()
 }      

}

export default ShopperStack