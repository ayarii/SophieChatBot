const puppeteer = require('puppeteer')
const axios = require('axios');
const User = require('../models/User')
const { error } = require('actions-on-google/dist/common');
const { chunk } = require('underscore');
const cron = require('node-cron')

exports.newsScraper = cron.schedule('00 10 * * Monday', () =>{
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
           scrapeNews(`https://www.google.com/search?q=${interest}&biw=1536&bih=422&tbm=nws&ei=a9SIYJn2INHsxgPu7qW4DA&oq=${interest}&gs_l=psy-ab.3...4399.7829.0.8038.9.9.0.0.0.0.126.927.0j8.9.0....0...1c.1.64.psy-ab..0.0.0.0...110.1dcJ0aJHqoo`,users[i]._id,interest)
              .then((res) => {
                console.log('res')
              })  
            }
     })
     .catch(error=>{
      console.log(error)
     }) 
    })

async function scrapeNews(url,id,interest){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [e1] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[1]/g-card/div/div/div[2]/a/div/div[2]/div[2]')
    const txt1 = await e1.getProperty('textContent')
    const title = await txt1.jsonValue()

     const [e2] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[1]/g-card/div/div/div[2]/a/div/div[2]/div[3]/div[1]')
    const txt2 = await e2.getProperty('textContent')
    const description = await txt2.jsonValue()  

    const [e3] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[1]/g-card/div/div/div[2]/a/div/div[2]/div[1]/text()')
    const txt3 = await e3.getProperty('textContent')
    const source = await txt3.jsonValue()  
    
    const [e4] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[1]/g-card/div/div/div[2]/a/div/div[1]/div/div/div/g-img/img')
    const txt4 = await e4.getProperty('src')
    const imgUrl = await txt4.jsonValue()    

    const [e5] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[2]/g-card/div/div/div[2]/a/div/div[2]')
    const txt5 = await e5.getProperty('textContent')
    const title2 = await txt5.jsonValue()

    const [e6] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[2]/g-card/div/div/div[2]/a/div/div[2]/div[3]/div[1]')
                  
    const txt6 = await e6.getProperty('textContent')
    const description2 = await txt6.jsonValue()

    const [e7] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[2]/g-card/div/div/div[2]/a/div/div[2]/div[1]/text()')
    const txt7 = await e7.getProperty('textContent')
    const source2 = await txt7.jsonValue()  
    
    const [e8] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[2]/g-card/div/div/div[2]/a/div/div[1]/div/div/div/g-img/img')
    const txt8 = await e8.getProperty('src')
    const imgUrl2 = await txt8.jsonValue()  

    const [e9] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[3]/g-card/div/div/div[2]/a/div/div[2]/div[2]')
    const txt9 = await e9.getProperty('textContent')
    const title3 = await txt9.jsonValue()

    const [e10] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[3]/g-card/div/div/div[2]/a/div/div[2]/div[3]/div[1]')
    const txt10 = await e10.getProperty('textContent')
    const description3 = await txt10.jsonValue()

    const [e11] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[3]/g-card/div/div/div[2]/a/div/div[2]/div[1]/text()')
    const txt11 = await e11.getProperty('textContent')
    const source3 = await txt11.jsonValue()  
    
    const [e12] = await page.$x('/html/body/div[7]/div/div[8]/div[1]/div/div[2]/div[2]/div/div/div[3]/g-card/div/div/div[2]/a/div/div[1]/div/div/div/g-img/img')
    const txt12 = await e12.getProperty('src')
    const imgUrl3 = await txt12.jsonValue()   
  


    browser.close()
    console.log({title,description,source,imgUrl,title2,description2,source2,title3,description3,source3,imgUrl3}) 

        axios.post('http://localhost:5000/recommendations', {
      "title":title,
      "description":description,
      "imgUrl":imgUrl,
      "category":"News",
      "source": source,
      "interest" : interest,
      "userId" : id,
      "link" : url,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    }) 
    
    axios.post('http://localhost:5000/recommendations', {
      "title":title2,
      "description":description2,
      "imgUrl":imgUrl2,
      "category":"News",
      "source": source2,
      "interest" : interest,
      "userId" : id,
      "link" : url,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    }) 

    axios.post('http://localhost:5000/recommendations', {
      "title":title3,
      "description":description3,
      "imgUrl":imgUrl3,
      "category":"News",
      "source": source3,
      "interest" : interest,
      "userId" : id,
      "link" : url,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    })   
}


//scrapeNews(`https://www.google.com/search?q=${interest}&biw=1536&bih=422&tbm=nws&ei=a9SIYJn2INHsxgPu7qW4DA&oq=${interest}&gs_l=psy-ab.3...4399.7829.0.8038.9.9.0.0.0.0.126.927.0j8.9.0....0...1c.1.64.psy-ab..0.0.0.0...110.1dcJ0aJHqoo`)