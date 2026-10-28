import {Locator,Page} from "@playwright/test"

class Register{
    page:Page
    txtName:Locator
    txtLastName:Locator
    txtEmail:Locator
    RbtnMale:   Locator                                 //radiobutton-RBtn
    RbtnFemale:Locator
    RbtnOthers:Locator
    txtMobileNo:Locator
    CalnDOB:Locator
    DDyear:   Locator                                     //DD-DropDown
    DDmonth:Locator
    date:Locator
    DDSubject:Locator
    CBoxSports: Locator                                    //cbox- checkbox
    CBoxReading:Locator
    CBoxMusic:Locator
    UBTnChooseFile:Locator                                 //UBtn- Upload Button
    txtAddress:Locator
    DDState:Locator
    DDCity:Locator
    BtnSubmit : Locator

    constructor(page:Page){
        this.page=page
        this.txtName=page.locator('#firstName')
        this.txtLastName=page.getByPlaceholder("Last Name",{exact:true})
        this.txtEmail=page.getByPlaceholder("name@example.com",{exact:true})
        this.RbtnMale=page.locator("#gender-radio-1")
        this.RbtnFemale=page.locator("#gender-radio-2")
        this.RbtnOthers=page.locator("#gender-radio-3")
        this.txtMobileNo=page.getByPlaceholder("Mobile Number",{exact:true})
        this.CalnDOB=page.locator("#dateOfBirthInput")
        this.DDyear=page.locator(".react-datepicker__year-select")
        this.DDmonth=page.locator(".react-datepicker__month-select")
        this.date=page.getByText("5",{exact:true})
        this.DDSubject=page.locator("#subjectsInput")
        this.CBoxSports=page.locator('#hobbies-checkbox-1')
        this.CBoxReading=page.locator('#hobbies-checkbox-2')
        this.CBoxMusic=page.locator('#hobbies-checkbox-3')
        this.UBTnChooseFile=page.locator("#uploadPicture")
        this.txtAddress=page.getByPlaceholder('Current Address',{exact:true})
        this.DDState=page.locator('//div[@class="css-13cymwt-control"]')
        this.DDCity=page.locator("#city")   
        this.BtnSubmit=page.getByRole("button",{name:"Submit",exact:true})    
    }

    async launchURL(url){
        await this.page.goto(url)
       }

     async entername(name,Lastname,email){
        await this.txtName.fill(name)
        await this.txtLastName.fill(Lastname)
        await this.txtEmail.fill(email)
       }

     async selectgender(gender){
        if(gender === "Male"){
            await this.RbtnMale.click()
        }
        else if (gender === "Female"){
            await this.RbtnFemale.click()
        }
        else if (gender ==="Others"){
            await this.RbtnOthers.click()
         }
         }

     async enterMobileNo(mob){
        await this.txtMobileNo.fill(mob)
     }   


     async selectdate(year:any,month:any,){
        await this.CalnDOB.click()
        await this.DDyear.selectOption({label:year})
        await this.DDmonth.selectOption({label:month})
        await this.date.first().click()
        // await this. page.keyboard.press("Tab")
     }

   async selectSubject(subject){
        await this.DDSubject.fill(subject)
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("Enter")
      }
 
   async selectHobbies(hobbies){   
     for (const hobby of hobbies){
        if (hobby === "Sports"){
            await this.CBoxSports.click();
        }else if (hobby === "Reading"){
            await this.CBoxReading.click()
        }else if (hobby === "Music"){
            await this.CBoxMusic.click();
        }
    }  
}

     async uploadPicture(picturepath){
        if (picturepath){
            await this.UBTnChooseFile.setInputFiles(picturepath)
        }
    }

    async enterAddress(address){
        await this.txtAddress.fill(address)
    }

    async selectStateAndCity(state,city){
        await this.DDState.click()
        await this.page.getByText(state,{exact:true}).last().click()  
    
        await this .DDCity.click()
        await this.page.getByText(city,{exact:true}).first().click()
    
    }

    async submitform(){
        await this.BtnSubmit.click()
    }

}

export default Register