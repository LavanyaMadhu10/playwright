import {test} from "@playwright/test"
import { getCurrentDate, getRandomNumber, getRandomString } from "../utils/typescriptUtility"
import{getTimestamp,getDate} from "../utils/typescriptUtility"
test("typescript Utility",async()=>{

    // let data1 = await getRandomNumber(5000000000,20000000000)    //to get ramdom phoneNumber(min value 10digits, Max value 11 digits)
    // console.log(data1);

    // let data2= await getRandomString(5)    // to get random email id's
    // console.log(data2+"@gmail.com");

    let Date= getCurrentDate()
    console.log(Date);

    let timestamp= getTimestamp()
    console.log(timestamp);
    

    console.log(getDate(5));
    
        
})