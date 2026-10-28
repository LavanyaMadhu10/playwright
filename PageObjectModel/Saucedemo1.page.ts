import{Locator,Page} from "@playwright/test"

class SaucePage{
    //Declaring the Properties
    page:Page
    txtUsername:Locator
    txtPassword:Locator
    BtnLogin:Locator
    BtnCart:Locator
    CartIcon:Locator
    BtnCheckout:Locator
    txtFirstName:Locator
    txtLastName:Locator
    txtPostalCode:Locator
    BtnContinue:Locator
    BtnFinish:Locator

     constructor(page:Page){
        this.page=page
        this.txtUsername=page.getByPlaceholder("Username",{exact:true})
        this.txtPassword=page.getByPlaceholder("Password",{exact:true})
        this.BtnLogin=page.locator("#login-button")
        this.BtnCart=page.locator("#add-to-cart-sauce-labs-backpack")
        this.CartIcon=page.locator(".shopping_cart_badge")
        this.BtnCheckout=page.locator("#checkout")
        this.txtFirstName=page.getByPlaceholder("First Name")
        this.txtLastName=page.getByPlaceholder("Last Name")
        this.txtPostalCode=page.getByPlaceholder("Zip/Postal Code")
        this.BtnContinue=page.locator("#continue")
        this.BtnFinish=page.locator("#finish")
     }

       async launchURL(url:any){
        await this.page.goto(url),{waitUntil:'domcontentloaded'}
       }

     async SLogin(name:any,password:any,){
        await this.txtUsername.fill(name)
        await this.txtPassword.fill(password)
       } 

     async ClickLoginButton(){
     await this.BtnLogin.click()
     } 

     async ClickAddtoCartButton(){
      await this.BtnCart.click()
    }

    async ClickCartIcon(){
        await this.CartIcon.click()
    }

    async ClickCheckoutButton(){
        await this.BtnCheckout.click()
    }
    
    async FillYourInfo(firstname:any,lastname:any,postalcode:any){
        await this.txtFirstName.fill(firstname)
        await this.txtLastName.fill(lastname)
        await this.txtPostalCode.fill(postalcode)
    }

    async ClickContinueButton(){
        await this.BtnContinue.click()
    }

    async ClickFinishButton(){
        await this.BtnFinish.click()
    }
}

export default SaucePage