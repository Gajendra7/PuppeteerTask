const puppeteer = require('puppeteer');

(async()=> {
    const browser= await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp"
        


    });

const page = await browser.newPage();

await page.goto('https://www.farecompare.com/');


 const Source = await page.waitForXPath("//*[@id='depart']");
// //await Source.click();
await Source.type('Jaipur', {delay: 300});

const Dest = await page.waitForXPath("//*[@id='dest']");
// // await Dest.click();
await Dest.type('Mumbai',{delay: 300});
//page.keyboard.press('Enter');

await page.$eval('#depart-date', el => el.value = '2023-09-02');

await page.click('span[class="FlightQuote__buttonText__fc"]');

//await page.$eval('#depart-date', el => el.value = '2023-08-15');    
//await page.$eval('#return-date', el => el.value = '2023-11-19', {delay: 300});



})();