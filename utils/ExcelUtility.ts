import excel from "exceljs"

//! get a whole excel values

export async function readExcel(
    filepath:string,
    sheetName:string
):Promise<any[][]>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet=await book.getWorksheet(sheetName)

    let data:any[][]=[]

    sheet?.eachRow((row)=>{
        let rowData:any[]=[]
        row.eachCell((cell)=>{
            rowData.push(cell.value)
        })
        data.push(rowData)
    })
    
return data 
}

//! get a specific row values
export async function getRowValues(
  filepath:string,
 sheetName:string,
 rowNumber:number
  ):Promise<any[][]>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet =await book.getWorksheet(sheetName)
    let row=sheet?.getRow(rowNumber)

    let rowData:any[]=[]

    row?.eachCell((cell)=>{
        rowData.push(cell.toString())
    })

    return rowData

  } 

//! get a specific cell values

export async function getCellValue(
    filepath:string,
    sheetName:string,
    rowNumber:number,
    cellNumber:number
  ){
    let book = new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet =await book.getWorksheet(sheetName)

    // let value=sheet?.getRow(rowNumber).getCell(cellNumber).value
    // return String(value)    

    let value=sheet?.getRow(rowNumber).getCell(cellNumber).toString()

    return value
    
}

//! to write(update) the excel file

export async function writeExcel(
     filepath:string,
    sheetName:string,
    rowNumber:number,
    cellNumber:number,
    value:any
){
    let book = new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet =await book.getWorksheet(sheetName)

    sheet!.getCell(rowNumber,cellNumber).value=value
    await book.xlsx.writeFile(filepath)
}
