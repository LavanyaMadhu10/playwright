import {test} from "@playwright/test"
import SaucePage from "../PageObjectModel/Saucedemo1.page"
import data from '../DDT/Saucedata.json'
import Login from "../PageObjectModel/loginpage.page"

//Login → Add Backpack → Cart → Checkout → Customer details → Continue → Finish

test("SauceDemo Login to sumbitForm",async({page})=>{
    let Sauce=new SaucePage (page)

       for (let Customer of data){
              await Sauce.launchURL(Customer.url)
              await Sauce.SLogin(Customer.username,Customer.password,)
              await Sauce.ClickLoginButton()
            //   await page.getByRole("button", {name:"OK"}).click()
              await Sauce.ClickAddtoCartButton()
              await Sauce.ClickCartIcon()
              await Sauce.ClickCheckoutButton()
              await Sauce.FillYourInfo(Customer.firstname,Customer.lastname,Customer.postalcode)
              await Sauce.ClickContinueButton()
              await Sauce.ClickFinishButton()
            }

       })