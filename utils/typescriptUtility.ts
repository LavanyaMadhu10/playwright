export async function getRandomNumber(
    min:number,
    max:number
){
    return Math.floor(Math.random() * (max-min+1)) +min
}

/**
 * Math.random() --> gererates a random number   //0.4667
 * !Math.random() geneartes the random decimal number grater than or equal to 0 and less than 1
 * !example: 0.3457, 0.1276
 * max-min+1 ----> 10-5+1-->6
 * 
 * multiply (Math.random * max-min+1)
 * 
 * Math.floor()---> round the number to the nearest integer
 */

export function getRandomString(
    length:number
){
    return Math.random().toString(36).substring(2,2+length)
}

/**
 * !Math.random()-- geneartes the random decimal number grater than or equal to 0 and less than 1
 * 
 * !toString()-- convert the number into the base-36 string using digits and letters
 * 36 means the base number system (radix 36).
    JavaScript uses base 36 to represent numbers using 36 characters:
     0–9 → 10 digits
     a–z → 26 letters
    Total = 10 + 26 = 36 characters.
 * 
 * !subString(startindex,endindex)--> extract the portion of the string
 * 
 * startindex: the index  from which the extraction begins
 * endindex :  the index where the extraction stops
 * 
 */


export function getCurrentDate(){
    return new Date().toISOString().split("T")[0]
 }

/**
 * ! new date()--> it will represent the current moment
 * example:  October 23, 2026, 11:18 AM
 * 
 * !toISOString() - Convert the Date into Standardized UTC(coordinanted Univedrsal Time) date-time string
*/



export function getTimestamp(){
    return Date.now()
}

 //?timestamp -> is a number tht represents a specific point in time
 //? usually represents the numbers of milliseconds since "1 jan,1970 at 12:00 UTC"
//! 1 jan,1970 at 12:00 UTC --> unix epoch         //interview question


export function getDate(
    days:number    //2
){
    let date=new Date()
    date.setDate(date.getDate()+days) // oct 23// 23+2 25
    return date.toISOString().split("T")[0]
}

/**
 * !getDate--return the month
 * ex--> today-->october 23 -->return 23
 * 
 * !setDate-->update the day of the month
 */