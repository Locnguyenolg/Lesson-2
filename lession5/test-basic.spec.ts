import {test} from '@playwright/test';
const name ="Loc";
const email = "locnguyen@gmail";
test ("ten test case",async ({page}) =>{
  //test.setTimeout(60000);
  await test.step("ten step 1",async ()=>{
   await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
   
  });
  for (let i = 0; i < 3; i++) {
    await test.step("dien du lieu "+i,async ()=>{
      await page.locator("//input[@id='username']").fill('');
      await page.locator("//input[@id='username']").pressSequentially(name+i,{ delay: 200 });
      await page.locator("//input[@id='email']").fill('');
      await page.locator("//input[@id='email']").pressSequentially(email+i,{delay :200});
    });
    await test.step("click submit "+i,async ()=>{
      await page.locator("//button[@type='submit']").click();
    });
  }
  await test.step("check trang thai radio male",async()=>{
    const isCheck = await page.locator("//input[@id='male']").isChecked(); // khi có báo lỗi promise cần thêm await để chờ lời hứa.
    console.log(isCheck);
  });
  await test.step("input file",async()=>{
   await page.locator("//input[@id='profile']").setInputFiles("lession5/Data/input-file.txt");
  });
  await page.waitForTimeout(10000);
});