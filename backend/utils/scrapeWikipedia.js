const puppeteer = require('puppeteer')


exports.scrapeProduct= async function (url){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [e1] = await page.$x('//*[@id="mw-content-text"]/div[1]/p[1]')
    const txt1 = await e1.getProperty('textContent')
    const p1 = await txt1.jsonValue()


    const [e2] = await page.$x('//*[@id="mw-content-text"]/div[1]/p[2]')
    const txt2 = await e2.getProperty('textContent')
    const p2 = await txt2.jsonValue()




    //console.log({p1,p2})
  


    browser.close()
    return {p1,p2}
}
//`https://fr.wikipedia.org/wiki/`

