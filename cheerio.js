const fetch = require('node-fetch');
const cheerio = require('cheerio')

fetch('https://1337x.to/user/tutsgalaxy/')
    .then(resp => resp.text())
    .then(data => parseData(data))
    .catch(err => console.log(err));

function parseData(webText) {
    if (webText.length) {
        const $ = cheerio.load(webText)

        $('.text-13')
            .find('span')
            .each((row, elem) => {
                console.log(row);
            });
    } else {
        console.warn("No data loaded!")
    }
}
