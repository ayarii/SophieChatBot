const puppeteer = require('puppeteer')
const axios = require('axios');
const { error } = require('actions-on-google/dist/common');
const cron = require('node-cron')

  exports.courseScraper = cron.schedule('00 10 * * Monday', () =>{
    var users 
    axios.get('http://localhost:5000/users')
         .then(response =>{
             //response.data is the array of users
              users = response.data
              console.log(users.length)
              //console.log(users[7].interests.length)
              for(i=0; i<users.length; i++){
                x=Math.floor(Math.random()*users[i].interests.length)
               const interest = users[i].interests[x]
               console.log(interest) 
                  scrapeCourse(`https://www.udacity.com/courses/all?search=${interest}`,users[i]._id,interest)
                  .then((res) => {
                    console.log('res')
                  })  
                }
         })
         .catch(error=>{
          console.log(error)
         })  
  })
async function scrapeCourse(url,id,interest){

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [e1] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[1]/a/article/div[2]/div[1]/h2')
    const txt1 = await e1.getProperty('textContent')
    const title1 = await txt1.jsonValue()

    const [e2] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[1]/a/article/div[2]/div[1]/h3')
    const txt2 = await e2.getProperty('textContent')
    const university1 = await txt2.jsonValue()

    const [e3] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[1]/a/article/div[2]/ul/li[1]/text()')
    const txt3 = await e3.getProperty('textContent')
    const level1 = await txt3.jsonValue()  

    const [e4] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[1]/a/article/div[2]/div[1]/p')
    const txt4 = await e4.getProperty('textContent')
    const description1 = await txt4.jsonValue()  
    
    const [e13] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[1]/a/article/div[2]/ul/li[2]/text()')
    const txt13 = await e13.getProperty('textContent')
    const duree1 = await txt13.jsonValue()

    const [e5] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[2]/a/article/div[2]/div[1]/h2')
    const txt5 = await e5.getProperty('textContent')
    const title2 = await txt5.jsonValue()

    const [e14] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[2]/a/article/div[2]/ul/li[2]/text()')
    const txt14 = await e14.getProperty('textContent')
    const duree2 = await txt14.jsonValue()

    const [e6] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[2]/a/article/div[2]/div[1]/h3')
    const txt6 = await e6.getProperty('textContent')
    const university2 = await txt6.jsonValue()

    const [e7] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[2]/a/article/div[2]/ul/li[1]/text()')
    const txt7 = await e7.getProperty('textContent')
    const level2 = await txt7.jsonValue()      

    const [e8] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[2]/a/article/div[2]/div[1]/p')
    const txt8 = await e8.getProperty('textContent')
    const description2 = await txt8.jsonValue()    

    const [e9] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[3]/a/article/div[2]/div[1]/h2')
    const txt9 = await e9.getProperty('textContent')
    const title3 = await txt9.jsonValue()

    const [e10] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[3]/a/article/div[2]/div[1]/h3')
    const txt10 = await e10.getProperty('textContent')
    const university3 = await txt10.jsonValue()

    const [e11] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[3]/a/article/div[2]/ul/li[1]/text()')
    const txt11 = await e11.getProperty('textContent')
    const level3 = await txt11.jsonValue()  
    
    const [e12] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[3]/a/article/div[2]/div[1]/p')
    const txt12 = await e12.getProperty('textContent')
    const description3 = await txt12.jsonValue() 
    
    const [e15] = await page.$x('//*[@id="__next"]/div/div/div[2]/div[2]/div/div[2]/main/div[2]/ul/li[3]/a/article/div[2]/ul/li[2]/text()')
    const txt15 = await e15.getProperty('textContent')
    const duree3 = await txt15.jsonValue()

    browser.close()
    console.log({title1, university1, level1, description1, duree1, title2, university2, level2, description2, duree2, title3, university3, level3, description3, duree3})

       axios.post('http://localhost:5000/recommendations', {
      "title":title1,
      "university":university1,
      "duree":duree1,
      "category":"Course",
      "level": level1,
      "interest" : interest,
      "description" : description1,
      "imgUrl" : "../assets/images/thenya.png",
      "userId" : id,
      "link" : url,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    })
    
    axios.post('http://localhost:5000/recommendations', {
      "title":title2,
      "university":university2,
      "duree":duree2,
      "category":"Course",
      "level": level2,
      "interest" : interest,
      "description" : description2,
      "imgUrl" : "../assets/images/thenya.png",
      "userId" : id,
      "link" : url,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    })

    axios.post('http://localhost:5000/recommendations', {
      "title":title3,
      "university":university3,
      "duree":duree3,
      "category":"Course",
      "level": level3,
      "interest" : interest,
      "description" : description3,
      "imgUrl" : "../assets/images/thenya.png",
      "userId" : id,
      "link" : url,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    }) 

}

