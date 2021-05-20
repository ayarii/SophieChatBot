const login = require('./login')
const puppeteer = require('puppeteer')
const axios = require('axios');
const { error } = require('actions-on-google/dist/common');
const { response } = require('express');
const cron = require('node-cron')

exports.eventscraper = cron.schedule('00 10 * * Monday', () =>{
var users 
axios.get('http://localhost:5000/users')
     .then(response =>{
          users = response.data
          console.log(users.length)
          for(i=0; i<users.length; i++){
            x=Math.floor(Math.random()*users[i].interests.length)
           const interest = users[i].interests[x]
           console.log(interest) 
           scrapeEvents(`https://www.facebook.com/events/search/?q=${interest}`,users[i]._id,interest)
              .then((res) => {
                console.log('res')
              })  
            }
            })
            .catch(error=>{
              console.log(error)
            }) 
    })
async function scrapeEvents(url,id,interest){
   const browser = await puppeteer.launch({
    args: ['--disable-notifications']
  })
  const page = await browser.newPage()
  await login(page)
   await new Promise(r => setTimeout(r, 7000));

  await page.goto(url)
  await new Promise(r => setTimeout(r, 4000));

/*  const links = await page.evaluate(url => {
    const links = []
    const scrapedLinks = document.querySelectorAll('a[href^="' + url + '/permalink"]')
    scrapedLinks.forEach(scrapedLink => {
       const split = scrapedLink.href.split('/')
      split.pop()
      const postLink = split.join('/')

      if (! links.includes(postLink)) {
          links.push(postLink)
      }
  })

      return links
      
    }, url)
    console.log(links) */
    

   const [e1] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[1]/div/a/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div[2]/span/span/object/a/span')
  const txt1 = await e1.getProperty('textContent')
  const title1 = await txt1.jsonValue()

  const [e2] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[1]/div/a/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div[1]/span/span')
  const txt2 = await e2.getProperty('textContent')
  const date1 = await txt2.jsonValue()

  const [e3] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[1]/div/a/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div[3]/span/span/span')
  const txt3 = await e3.getProperty('textContent')
  const mode1 = await txt3.jsonValue()

  const [e4] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[1]/div/a/div[1]/div/div/div/div/div[1]/div/img')
  const txt4 = await e4.getProperty('src')
  const imgUrl1 = await txt4.jsonValue() 

  const [e5] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[2]/div/a/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div[2]/span/span/object/a/span')
  const txt5 = await e5.getProperty('textContent')
  const title2 = await txt5.jsonValue()

  const [e6] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[2]/div/a/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div[1]/span/span')
  const txt6 = await e6.getProperty('textContent')
  const date2 = await txt6.jsonValue()

  const [e7] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[2]/div/a/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div[3]/span/span/span')
  const txt7 = await e7.getProperty('textContent')
  const mode2 = await txt7.jsonValue()  
  

  const [e8] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[2]/div/a/div[1]/div/div/div/div/div[1]/div/img')
  const txt8 = await e8.getProperty('src')
  const imgUrl2 = await txt8.jsonValue()    

  const [e9] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[3]/div/a/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div[2]/span/span')
  const txt9 = await e9.getProperty('textContent')
  const title3 = await txt9.jsonValue()

  const [e10] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[3]/div/a/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div[1]/span/span')
  const txt10 = await e10.getProperty('textContent')
  const date3 = await txt10.jsonValue()

  const [e11] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[3]/div/a/div[1]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div[3]/span/span/span')
  const txt11 = await e11.getProperty('textContent')
  const mode3 = await txt11.jsonValue()  
  
  const [e12] = await page.$x('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div/div[3]/div/a/div[1]/div/div/div/div/div[1]/div/img')
  const txt12 = await e12.getProperty('src')
  const imgUrl3 = await txt12.jsonValue()   
  
  browser.close()


  console.log({title1, date1, mode1, imgUrl1, title2, date2, mode2, imgUrl2, title3, date3, mode3, imgUrl3}) 

       axios.post('http://localhost:5000/recommendations', {
      "title":title1,
      "date":date1,
      "imgUrl":imgUrl1,
      "category":"Events",
      "mode": mode1,
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
      "date":date2,
      "imgUrl":imgUrl2,
      "category":"Events",
      "mode": mode2,
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
      "date":date3,
      "imgUrl":imgUrl3,
      "category":"Events",
      "mode": mode3,
      "interest" : interest,
      "userId" : id,
      "link" : url,
    }).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error);
    })  
}

//module.exports = scrapeEvents(`https://www.facebook.com/events/search/?q=${interest}`) ;