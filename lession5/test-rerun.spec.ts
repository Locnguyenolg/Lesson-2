// import {test} from '@playwright/test';
// test ("testcase1",async({page})=>{
//    await test.step("ten step",async()=>{
//      await page.goto("");
//    })

//   //await page.goto("");

// });
import { test } from '@playwright/test'
test("ten tcs", async ({ page }) => {
    test.setTimeout(60000);
    await test.step("ten step", async () => {
        await page.goto("https://www.youtube.com/watch?v=meGxamHD5xU", { waitUntil: 'networkidle' });
        //await page.locator("//*[@id='movie_player']/div[7]/button").click();

        //button[@id='button']
        await test.step("click btn", async () => {
            await page.locator("//button[@aria-label='Play']").click();
        })
        await page.waitForTimeout(10000);
        
    });
});