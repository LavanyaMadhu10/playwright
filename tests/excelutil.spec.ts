import {test} from "@playwright/test"
import { readExcel } from "../utils/ExcelUtility"
import { getRowValues } from "../utils/ExcelUtility";
import { getCellValue } from "../utils/ExcelUtility";
import { writeExcel} from "../utils/ExcelUtility";


test("excel utility",async()=>{
    // let value=await readExcel("C:/Users/USER/Desktop/PlayWright/DDT/excelFile.xlsx","Sheet2")
    //  console.log(value);


    // let value1=await getRowValues("C:/Users/USER/Desktop/PlayWright/DDT/excelFile.xlsx","Sheet2",3)
    // console.log(value1)

    // let value2= await getCellValue("C:/Users/USER/Desktop/PlayWright/DDT/excelFile.xlsx","Sheet2",2,3)
    // console.log(value2);
    
    await writeExcel("C:/Users/USER/Desktop/PlayWright/DDT/excelFile.xlsx","Sheet4",1,1,"playwright")
    
})