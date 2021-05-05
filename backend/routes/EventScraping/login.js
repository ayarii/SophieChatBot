const facebookAccount = require('./facebookIds')

/**
 * @param {import("puppeteer").Page} page 
 * 
 * @returns {Promise<>}
 */

function login (page) {
    return new Promise(async resolve => {
        await page.goto('https://www.facebook.com')

        const loginInputSelector = 'input[type="text"]'
        const passwordInputSelector = 'input[type="password"]'
        await page.waitForSelector(loginInputSelector)
        await page.waitForSelector(passwordInputSelector)

        await page.evaluate((login, password, loginInputSelector, passwordInputSelector) => {
            document.querySelector(loginInputSelector).value = login 
            document.querySelector(passwordInputSelector).value = password
        }, facebookAccount.login, facebookAccount.password, loginInputSelector, passwordInputSelector)

        const submitButtonSelector = 'button[type="submit"]'
        await page.waitForSelector(submitButtonSelector)
        await page.click(submitButtonSelector)

        resolve()
    })
}

module.exports = login;