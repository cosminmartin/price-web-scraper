const request = require('request-promise');
const cheerio = require('cheerio');


(async () => {
    const emagPage = 'https://www.emag.ro/procesor-amd-ryzentm-5-3600-35mb-4-2-ghz-cu-wraith-stealth-cooler-100-100000031box/pd/DGY10RBBM/?X-Search-Id=63427e865e119d8a96de&X-Product-Id=5752635&X-Search-Page=1&X-Search-Position=8&X-Section=search&X-MB=0&X-Search-Action=view';

    const response = await request(emagPage);

    const $ = cheerio.load(response);

    let title = $('h1[class="page-title"]').text(); 
    let productImg = $('div[class="thumbnail-wrapper ph-card active"] > a > img').attr('src');
    let cache = $('td[class="col-xs-8"]').first().text();
    let frequency = $('td[class="col-xs-8"]').eq(2).text();
    let boost = $('td[class="col-xs-8"]').eq(3).text();
    let cores = $('td[class="col-xs-8"]').eq(4).text();
    let threads = $('td[class="col-xs-8"]').eq(8).text();
    let oldPrice = $('p[class="product-old-price"] > s').first().text();
    let newPrice = $('p[class="product-new-price"]').first().text();

    console.log(title.trim(), cache, frequency, boost, cores, threads, oldPrice, newPrice.trim());
})();

