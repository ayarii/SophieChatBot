const { LinkedInProfileScraper } = require('linkedin-profile-scraper')

exports.scrapping = async (link) => {
    try {
        const scraper = new LinkedInProfileScraper({
            sessionCookieValue: 'AQEDASpmcO4CfKLGAAABdJrKxgwAAAF4x77LU1YAYKBTXs3rUvLJjiQoqZWwn1JSeHREvDIKfD8sY1u_YE6BjECwuDS3wUKh2ZYpmSQYqehytFXWmg-yeDWPTp638Cee6jUGNpB7TNawoeZnyacnV_Ys',
            keepAlive: false,
            timeout:3000000
        });

        // Prepare the scraper
        // Loading it in memory

        await scraper.setup()

        const result = await scraper.run(link)
        console.log(result)
        return result
    } catch (err) {
                console.log(err)
                if (err.name === 'SessionExpired') {
                    // Do something when the scraper notifies you it's not logged-in anymore
                  }
                  return err
    }
}
