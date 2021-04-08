const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const fetch = require('node-fetch');

router.route('')
    .post(async (req, res) => {
        currentStock=stockInput;
        const URL = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=${stockInput}&range=1mo&region=US`;
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'x-rapid-api-key': `${key1}`,
                'x-rapidapi-host': `${host1}`
            }
        })
    })
 module.exports = router;