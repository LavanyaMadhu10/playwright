import {test} from "@playwright/test"
import { log } from "console";

test("test1", async()=>{
    console.log('add user');
    }) 

test("test2", async()=>{
    console.log('edit user');
    })

test("test3", async()=>{
    console.log('delete user');
    })

test.beforeAll(async()=>{
        console.log("read excel");
        console.log("connect to Database");
        console.log("generating the test data");
        console.log("read configuration file");  
      })

test.afterAll(async()=>{
        console.log("disconnect Database");
        console.log("deleting the temproary test data");
        console.log("generate the Html report");
        console.log("close the external resources");
  }) 
  
  test.beforeEach(async({page})=>{
      console.log("Launch the Browser");
      console.log("Launch the url");
      console.log("Login");
      await page.goto('https://www.amazon.in/')  
  })    

  test.afterEach(async()=>{
       console.log("Logout");
       console.log("Close the browser manually");
       console.log("Screenshot after failure");
       console.log("clear temporary testdata");
  })    
       
  /**Sequence of execution
   * 
   * beforeAll()
   * 
   * beaforeEach()
   * testscript 1
   * afterEach()
   * 
   * beaforeEach()
   * testscript 2
   * afterEach()
   * 
   * beaforeEach()
   * testscript 3
   * afterEach()......
   * 
   * afterAll()
   */
       