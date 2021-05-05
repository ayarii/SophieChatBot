const puppeteer = require('puppeteer')
const axios = require('axios');
const { error } = require('actions-on-google/dist/common');

const interest = 'angular'
async function scrapeCourse(url){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [e1] = await page.$x('/html/body/div[2]/div/div[1]/div/main/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[1]/div/a/div/div/div[1]/div[1]/h2')
    const txt1 = await e1.getProperty('textContent')
    const title1 = await txt1.jsonValue()

    const [e2] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[1]/div/a/div/div/div[1]/div[1]/div[1]/span')
    const txt2 = await e2.getProperty('textContent')
    const university1 = await txt2.jsonValue()

    const [e3] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[1]/div/a/div/div/div[2]/div[2]/span')
    const txt3 = await e3.getProperty('textContent')
    const level1 = await txt3.jsonValue()  
    

    const [e4] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[1]/div/a/div/div/div[1]/div[2]/img')
    const txt4 = await e4.getProperty('src')
    const imgUrl1 = await txt4.jsonValue()    

    const [e5] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[2]/div/a/div/div/div[1]/div[1]/h2')
    const txt5 = await e5.getProperty('textContent')
    const title2 = await txt5.jsonValue()

    const [e6] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[2]/div/a/div/div/div[1]/div[1]/div[1]/span')
    const txt6 = await e6.getProperty('textContent')
    const university2 = await txt6.jsonValue()

    const [e7] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[2]/div/a/div/div/div[2]/div[2]/span')
    const txt7 = await e7.getProperty('textContent')
    const level2 = await txt7.jsonValue()  
    

    const [e8] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[2]/div/a/div/div/div[1]/div[2]/img')
    const txt8 = await e8.getProperty('src')
    const imgUrl2 = await txt8.jsonValue()    

    const [e9] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[3]/div/a/div/div/div[1]/div[1]/h2')
    const txt9 = await e9.getProperty('textContent')
    const title3 = await txt9.jsonValue()

    const [e10] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[3]/div/a/div/div/div[1]/div[1]/div[1]/span')
    const txt10 = await e10.getProperty('textContent')
    const university3 = await txt10.jsonValue()

    const [e11] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[3]/div/a/div/div/div[2]/div[2]/span')
    const txt11 = await e11.getProperty('textContent')
    const level3 = await txt11.jsonValue()  
    
    const [e12] = await page.$x('//*[@id="main"]/div[2]/div/div[1]/div[2]/div/div/div/div/div/ul/li[3]/div/a/div/div/div[1]/div[2]/img')
    const txt12 = await e12.getProperty('src')
    const imgUrl3 = await txt12.jsonValue()    


    //console.log({p1,p2})
  

    browser.close()
    console.log({title1, university1, level1, imgUrl1, title2, university2, level2, imgUrl2, title3, university3, level3, imgUrl3}) 

/*      axios.post('http://localhost:5000/recommendations', {
      "title":title1,
      "university":university1,
      "imgUrl":imgUrl1,
      "category":"Course",
      "level": level1,
      "interest" : interest,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    })
    
    axios.post('http://localhost:5000/recommendations', {
      "title":title2,
      "university":university2,
      "imgUrl":imgUrl2,
      "category":"Course",
      "level": level2,
      "interest" : interest,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    })

    axios.post('http://localhost:5000/recommendations', {
      "title":title3,
      "university":university3,
      "imgUrl":imgUrl3,
      "category":"Course",
      "level": level3,
      "interest" : interest,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    })*/

}

scrapeCourse(`https://www.coursera.org/search?query=${interest}&`)

