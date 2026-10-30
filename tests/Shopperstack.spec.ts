import {test} from"@playwright/test"
import data from "../DDT/shopperstack.json"
import ShopperStack from "../PageObjectModel/Shopperstack1.page"
import ShopperLogin from "../PageObjectModel/Shopperstack1.page"

test("ShooperStack Login",async({page})=>{

    let Slogin= new ShopperStack(page)

    for (let Shopper of data){

        await Slogin.launchURL(Shopper.url)
        await Slogin.ShopperLogin(Shopper.Email,Shopper.Passcode)
        
    }

})